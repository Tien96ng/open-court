using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace open_court.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Businesses",
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
                    table.PrimaryKey("PK_Businesses", x => x.CourtId);
                });

            migrationBuilder.InsertData(
                table: "Businesses",
                columns: new[] { "CourtId", "Address", "IsCovidOpen", "IsIndoor", "Name", "NumberOfHoops", "TotalRating", "TotalRatingCount" },
                values: new object[] { 1, "2323 N Shirley St, Tacoma, WA 98407", true, false, "Kandle Park", 6, 0, 0 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Businesses");
        }
    }
}
