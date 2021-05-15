using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace open_court.Migrations
{
    public partial class OneToMany : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Courts",
                columns: table => new
                {
                    CourtId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "varchar(255) CHARACTER SET utf8mb4", maxLength: 255, nullable: false),
                    Address = table.Column<string>(type: "varchar(255) CHARACTER SET utf8mb4", maxLength: 255, nullable: false),
                    NumberOfHoops = table.Column<int>(type: "int", nullable: false),
                    TotalRatingCount = table.Column<int>(type: "int", nullable: false),
                    TotalRating = table.Column<int>(type: "int", nullable: false),
                    IsIndoor = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    IsCovidOpen = table.Column<bool>(type: "tinyint(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courts", x => x.CourtId);
                });

            migrationBuilder.CreateTable(
                name: "Reviews",
                columns: table => new
                {
                    ReviewId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    PostDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    ReviewText = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    CourtId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reviews", x => x.ReviewId);
                    table.ForeignKey(
                        name: "FK_Reviews_Courts_CourtId",
                        column: x => x.CourtId,
                        principalTable: "Courts",
                        principalColumn: "CourtId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Courts",
                columns: new[] { "CourtId", "Address", "IsCovidOpen", "IsIndoor", "Name", "NumberOfHoops", "TotalRating", "TotalRatingCount" },
                values: new object[,]
                {
                    { 1, "2323 N Shirley St, Tacoma, WA, 98407", true, false, "Kandle Park", 6, 0, 0 },
                    { 15, "645 Hayes St, San Francisco, CA, 94102", true, false, "Hayes Valley Basketball Court", 2, 0, 0 },
                    { 14, "401 Berry St, San Francisco, CA, 94158", true, false, "Mission Creek Park-Basketball Court", 4, 0, 0 },
                    { 13, "7770 Dean Martin Dr #305, Las Vegas, NV, 89139", true, true, "Hoop City Las Vegas", 4, 0, 0 },
                    { 12, "1440 N Campus Dr, Brookings, SD, 57006", true, true, "Miller Wellness Center", 6, 0, 0 },
                    { 11, "W Uintah St & 24th St, Colorado Springs, CO, 80904", true, false, "Thorndale Park", 4, 0, 0 },
                    { 10, "2300 W Idaho St, Boise, ID, 83702", true, false, "Fairview Park", 2, 0, 0 },
                    { 16, "Portland Heights Park, Portland, OR, 97201", true, false, "Portland Heights Park", 2, 0, 0 },
                    { 9, "523-573 Washtenaw Ave, Ann Arbor, MI, 48109", true, false, "Palmer Field Basketball Courts", 2, 0, 0 },
                    { 7, "225 gold st, Brooklyn, NY, 11201", true, false, "Golconda Playground", 0, 10, 0 },
                    { 6, "155th St And Frederick Douglass Blvd, New York, NY, 10039", true, false, "Holcombe Rucker Park", 2, 0, 0 },
                    { 5, "3801 Beacon Ave S, Seattle, WA, 98108", true, false, "Jefferson Park", 2, 0, 0 },
                    { 4, "501 S I St Tacoma, WA, 98405", true, false, "Wright Park", 2, 0, 0 },
                    { 3, "8425 6th Ave Tacoma, WA, 98406", true, false, "Titlow Beach and Park", 2, 0, 0 },
                    { 2, "801 N Mason Ave Tacoma, WA, 98406", true, false, "Jefferson Park", 2, 0, 0 },
                    { 8, "4100 Forbes Ave, Pittsburgh, PA, 15260", true, false, "Schenley Plaza", 2, 0, 0 },
                    { 17, "5576 SE Division St, Portland, OR, 97206", true, false, "Clinton City Park", 2, 0, 0 }
                });

            migrationBuilder.InsertData(
                table: "Reviews",
                columns: new[] { "ReviewId", "CourtId", "PostDate", "ReviewText" },
                values: new object[] { 1, 1, new DateTime(2021, 5, 14, 17, 44, 52, 888, DateTimeKind.Local).AddTicks(4700), "Best place to hoop in Tacoma!" });

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_CourtId",
                table: "Reviews",
                column: "CourtId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Reviews");

            migrationBuilder.DropTable(
                name: "Courts");
        }
    }
}
