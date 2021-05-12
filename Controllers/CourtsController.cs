using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using open_court.Models;

namespace open_court.Controllers
{
  [ApiController]
  [Route("[controller]")]

  public class CourtsController : ControllerBase
  {
    private readonly OpenCourtContext _db;
    public CourtsController(OpenCourtContext db) {
      _db =db;
    }

    // GET courts
    public ActionResult <IEnumerable<Court>> Get()
    {
      return _db.Courts;
    }
  }
}