using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using open_court.Models;

namespace open_court.Controllers
{
  [ApiController]
  [Route("api/[controller]")]

  public class CourtsController : ControllerBase
  {
    private readonly OpenCourtContext _db;
    public CourtsController(OpenCourtContext db) {
      _db = db;
    }

    // GET api//courts/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<Court>> GetCourt(int id)
    {
      var court = await _db.Courts.FindAsync(id);

      if(court == null)
      {
        return NotFound();
      }

      return court;
    }

    // GET /api/courts/{params}
    [HttpGet]
    public ActionResult<IEnumerable<Court>> Get(string name, bool isIndoor, string numberOfHoops, string city, string state, string zipcode)
    {
      var court = _db.Courts.AsQueryable();
      if(name != null) court = court.Where(entry => entry.Name.Contains(name));

      if(isIndoor.ToString() != null) court = court.Where(entry => entry.IsIndoor == isIndoor);

      if(numberOfHoops != null) court = court.Where(entry => entry.NumberOfHoops.ToString() == numberOfHoops);

      if(city != null) court = court.Where(entry => entry.Address.Contains(city));

      if(state != null) court = court.Where(entry => entry.Address.Contains(state));

      if(zipcode != null) court = court.Where(entry => entry.Address.Contains(zipcode));

      return court.ToList();
    }

    // POST /api/courts
    [HttpPost]
    public async Task<ActionResult<Court>> Post(Court court)
    {
      _db.Courts.Add(court);
      await _db.SaveChangesAsync();

      return CreatedAtAction(nameof(GetCourt), new { id = court.CourtId }, court);
    }
  }
}