using Microsoft.EntityFrameworkCore;

namespace open_court.Models
{
  public class OpenCourtContext : DbContext
  {
    public OpenCourtContext(DbContextOptions<OpenCourtContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.Entity<Court>()
        .HasData(
          new Court { CourtId = 1,  Name = "Kandle Park", Address = "2323 N Shirley St, Tacoma, WA 98407", NumberOfHoops = 6, TotalRatingCount = 0, TotalRating = 0, IsIndoor = false, IsCovidOpen = true }
        );
    }

    public DbSet<Court> Courts { get; set; }
  }
}