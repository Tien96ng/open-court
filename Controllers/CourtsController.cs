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
    public ActionResult<IEnumerable<Court>> Get(string name, bool isIndoor, string numberOfHoops)
    {
      var court = _db.Courts.AsQueryable();
      if(name != null) court = court.Where(entry => entry.Name.Contains(name));

      if(isIndoor.ToString() != null) court = court.Where(entry => entry.IsIndoor == isIndoor);

      if(numberOfHoops != null) court = court.Where(entry => entry.NumberOfHoops.ToString() == numberOfHoops);
      

      return court.ToList();
    }
  }
}