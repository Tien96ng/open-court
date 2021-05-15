using System;

namespace open_court.Models
{
  public class Review
  {
    public int ReviewId { get; set; }
    public DateTime PostDate { get; set; }
    public string ReviewText { get; set; }
    public int CourtId { get; set; }
    public virtual Court Court { get; set; }
  }
}