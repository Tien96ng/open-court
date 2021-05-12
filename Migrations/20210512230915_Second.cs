using Microsoft.EntityFrameworkCore.Migrations;

namespace open_court.Migrations
{
    public partial class Second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 1,
                column: "Address",
                value: "2323 N Shirley St, Tacoma, WA, 98407");

            migrationBuilder.InsertData(
                table: "Courts",
                columns: new[] { "CourtId", "Address", "IsCovidOpen", "IsIndoor", "Name", "NumberOfHoops", "TotalRating", "TotalRatingCount" },
                values: new object[,]
                {
                    { 16, "Portland Heights Park, Portland, OR, 97201", true, false, "Portland Heights Park", 2, 0, 0 },
                    { 15, "645 Hayes St, San Francisco, CA, 94102", true, false, "Hayes Valley Basketball Court", 2, 0, 0 },
                    { 14, "401 Berry St, San Francisco, CA, 94158", true, false, "Mission Creek Park-Basketball Court", 4, 0, 0 },
                    { 13, "7770 Dean Martin Dr #305, Las Vegas, NV, 89139", true, true, "Hoop City Las Vegas", 4, 0, 0 },
                    { 12, "1440 N Campus Dr, Brookings, SD, 57006", true, true, "Miller Wellness Center", 6, 0, 0 },
                    { 11, "W Uintah St & 24th St, Colorado Springs, CO, 80904", true, false, "Thorndale Park", 4, 0, 0 },
                    { 17, "5576 SE Division St, Portland, OR, 97206", true, false, "Clinton City Park", 2, 0, 0 },
                    { 10, "2300 W Idaho St, Boise, ID, 83702", true, false, "Fairview Park", 2, 0, 0 },
                    { 8, "4100 Forbes Ave, Pittsburgh, PA, 15260", true, false, "Schenley Plaza", 2, 0, 0 },
                    { 7, "225 gold st, Brooklyn, NY, 11201", true, false, "Golconda Playground", 0, 10, 0 },
                    { 6, "155th St And Frederick Douglass Blvd, New York, NY, 10039", true, false, "Holcombe Rucker Park", 2, 0, 0 },
                    { 5, "3801 Beacon Ave S, Seattle, WA, 98108", true, false, "Jefferson Park", 2, 0, 0 },
                    { 4, "501 S I St Tacoma, WA, 98405", true, false, "Wright Park", 2, 0, 0 },
                    { 3, "8425 6th Ave Tacoma, WA, 98406", true, false, "Titlow Beach and Park", 2, 0, 0 },
                    { 9, "523-573 Washtenaw Ave, Ann Arbor, MI, 48109", true, false, "Palmer Field Basketball Courts", 2, 0, 0 },
                    { 2, "801 N Mason Ave Tacoma, WA, 98406", true, false, "Jefferson Park", 2, 0, 0 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 17);

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "CourtId",
                keyValue: 1,
                column: "Address",
                value: "2323 N Shirley St, Tacoma, WA 98407");
        }
    }
}
