using System;
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
            new Court { CourtId = 1,  Name = "Kandle Park", Address = "2323 N Shirley St, Tacoma, WA, 98407", NumberOfHoops = 6, TotalRatingCount = 0, TotalRating = 0, IsIndoor = false, IsCovidOpen = true },
            new Court { CourtId = 2,  Name = "Jefferson Park", Address = "801 N Mason Ave Tacoma, WA, 98406", NumberOfHoops = 2, TotalRatingCount = 0, TotalRating = 0, IsIndoor = false, IsCovidOpen = true },
            new Court { CourtId = 3,  Name = "Titlow Beach and Park", Address = "8425 6th Ave Tacoma, WA, 98406", NumberOfHoops = 2, TotalRatingCount = 0, TotalRating = 0, IsIndoor = false, IsCovidOpen = true },
            new Court { CourtId = 4,  Name = "Wright Park", Address = "501 S I St Tacoma, WA, 98405", NumberOfHoops = 2, TotalRatingCount = 0, TotalRating = 0, IsIndoor = false, IsCovidOpen = true },
            new Court { CourtId = 5,  Name = "Jefferson Park", Address = "3801 Beacon Ave S, Seattle, WA, 98108", NumberOfHoops = 2, TotalRatingCount = 0, TotalRating = 0, IsIndoor = false, IsCovidOpen = true },
            new Court { CourtId = 6,  Name = "Holcombe Rucker Park", Address = "155th St And Frederick Douglass Blvd, New York, NY, 10039", NumberOfHoops = 2, TotalRatingCount = 0, TotalRating = 0, IsIndoor = false, IsCovidOpen = true },
            new Court { CourtId = 7,  Name = "Golconda Playground", Address = "225 gold st, Brooklyn, NY, 11201", NumberOfHoops = 0, TotalRatingCount = 0, TotalRating = 10, IsIndoor = false, IsCovidOpen = true },
            new Court { CourtId = 8,  Name = "Schenley Plaza", Address = "4100 Forbes Ave, Pittsburgh, PA, 15260", NumberOfHoops = 2, TotalRatingCount = 0, TotalRating = 0, IsIndoor = false, IsCovidOpen = true },
            new Court { CourtId = 9,  Name = "Palmer Field Basketball Courts", Address = "523-573 Washtenaw Ave, Ann Arbor, MI, 48109", NumberOfHoops = 2, TotalRatingCount = 0, TotalRating = 0, IsIndoor = false, IsCovidOpen = true },
            new Court { CourtId = 10,  Name = "Fairview Park", Address = "2300 W Idaho St, Boise, ID, 83702", NumberOfHoops = 2, TotalRatingCount = 0, TotalRating = 0, IsIndoor = false, IsCovidOpen = true },
            new Court { CourtId = 11,  Name = "Thorndale Park", Address = "W Uintah St & 24th St, Colorado Springs, CO, 80904", NumberOfHoops = 4, TotalRatingCount = 0, TotalRating = 0, IsIndoor = false, IsCovidOpen = true },
            new Court { CourtId = 12,  Name = "Miller Wellness Center", Address = "1440 N Campus Dr, Brookings, SD, 57006", NumberOfHoops = 6, TotalRatingCount = 0, TotalRating = 0, IsIndoor = true, IsCovidOpen = true },
            new Court { CourtId = 13,  Name = "Hoop City Las Vegas", Address = "7770 Dean Martin Dr #305, Las Vegas, NV, 89139", NumberOfHoops = 4, TotalRatingCount = 0, TotalRating = 0, IsIndoor = true, IsCovidOpen = true },
            new Court { CourtId = 14,  Name = "Mission Creek Park-Basketball Court", Address = "401 Berry St, San Francisco, CA, 94158", NumberOfHoops = 4, TotalRatingCount = 0, TotalRating = 0, IsIndoor = false, IsCovidOpen = true },
            new Court { CourtId = 15,  Name = "Hayes Valley Basketball Court", Address = "645 Hayes St, San Francisco, CA, 94102", NumberOfHoops = 2, TotalRatingCount = 0, TotalRating = 0, IsIndoor = false, IsCovidOpen = true },
            new Court { CourtId = 16,  Name = "Portland Heights Park", Address = "Portland Heights Park, Portland, OR, 97201", NumberOfHoops = 2, TotalRatingCount = 0, TotalRating = 0, IsIndoor = false, IsCovidOpen = true },
            new Court { CourtId = 17,  Name = "Clinton City Park", Address = "5576 SE Division St, Portland, OR, 97206", NumberOfHoops = 2, TotalRatingCount = 0, TotalRating = 0, IsIndoor = false, IsCovidOpen = true }

        );
      builder.Entity<Review>()
        .HasData(
            new Review { ReviewId = 1,  PostDate = DateTime.Now, ReviewText = "Best place to hoop in Tacoma!", CourtId = 1 }
        );
    }

    public virtual DbSet<Court> Courts { get; set; }
    public DbSet<Review> Reviews { get; set; }
  }
}