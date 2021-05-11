using System;
using System.ComponentModel.DataAnnotations;

namespace open_court.Models
{
  public class Court {
    public int CourtId { get; set; }
    
    [Required]
    [StringLength(255)]
    public string Name { get; set; }

    [Required]
    [StringLength(255)]
    public string Address { get; set; }

    [Required]
    [Range(0, 50, ErrorMessage = "Number of Hoops can't be a negative number of more than 50.")]
    public int NumberOfHoops { get; set; }

    [Required]
    [Range(0, 99999, ErrorMessage = "Total Rating Count can't be a negative number.")]
    public int TotalRatingCount { get; set; }

    [Required]
    [Range(0, 99999, ErrorMessage = "Total Rating amount can't be a negative number.")]
    public int TotalRating { get; set; }

    [Required]
    [Range(typeof(bool), "true", "false")]
    public bool IsIndoor { get; set; }

    [Required]
    [Range(typeof(bool), "true", "false")]
    public bool IsCovidOpen { get; set; }

    // Bathroom?
    // Water Fountain?
    // Parking? Street Parking?

  }
}