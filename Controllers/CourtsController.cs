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

    // GET /api/courts/
    [HttpGet]
    public ActionResult<IEnumerable<Court>> GetAll()
    {
      return _db.Courts.ToList();
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
  }
}