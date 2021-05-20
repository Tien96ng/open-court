﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using open_court.Models;

namespace open_court.Migrations
{
    [DbContext(typeof(OpenCourtContext))]
    partial class OpenCourtContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("open_court.Models.Court", b =>
                {
                    b.Property<int>("CourtId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("varchar(255) CHARACTER SET utf8mb4");

                    b.Property<bool>("IsCovidOpen")
                        .HasColumnType("tinyint(1)");

                    b.Property<bool>("IsIndoor")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("varchar(255) CHARACTER SET utf8mb4");

                    b.Property<int>("NumberOfHoops")
                        .HasColumnType("int");

                    b.Property<int>("TotalRating")
                        .HasColumnType("int");

                    b.Property<int>("TotalRatingCount")
                        .HasColumnType("int");

                    b.HasKey("CourtId");

                    b.ToTable("Courts");

                    b.HasData(
                        new
                        {
                            CourtId = 1,
                            Address = "2323 N Shirley St, Tacoma, WA, 98407",
                            IsCovidOpen = true,
                            IsIndoor = false,
                            Name = "Kandle Park",
                            NumberOfHoops = 6,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        },
                        new
                        {
                            CourtId = 2,
                            Address = "801 N Mason Ave Tacoma, WA, 98406",
                            IsCovidOpen = true,
                            IsIndoor = false,
                            Name = "Jefferson Park",
                            NumberOfHoops = 2,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        },
                        new
                        {
                            CourtId = 3,
                            Address = "8425 6th Ave Tacoma, WA, 98406",
                            IsCovidOpen = true,
                            IsIndoor = false,
                            Name = "Titlow Beach and Park",
                            NumberOfHoops = 2,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        },
                        new
                        {
                            CourtId = 4,
                            Address = "501 S I St Tacoma, WA, 98405",
                            IsCovidOpen = true,
                            IsIndoor = false,
                            Name = "Wright Park",
                            NumberOfHoops = 2,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        },
                        new
                        {
                            CourtId = 5,
                            Address = "3801 Beacon Ave S, Seattle, WA, 98108",
                            IsCovidOpen = true,
                            IsIndoor = false,
                            Name = "Jefferson Park",
                            NumberOfHoops = 2,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        },
                        new
                        {
                            CourtId = 6,
                            Address = "155th St And Frederick Douglass Blvd, New York, NY, 10039",
                            IsCovidOpen = true,
                            IsIndoor = false,
                            Name = "Holcombe Rucker Park",
                            NumberOfHoops = 2,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        },
                        new
                        {
                            CourtId = 7,
                            Address = "225 gold st, Brooklyn, NY, 11201",
                            IsCovidOpen = true,
                            IsIndoor = false,
                            Name = "Golconda Playground",
                            NumberOfHoops = 10,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        },
                        new
                        {
                            CourtId = 8,
                            Address = "4100 Forbes Ave, Pittsburgh, PA, 15260",
                            IsCovidOpen = true,
                            IsIndoor = false,
                            Name = "Schenley Plaza",
                            NumberOfHoops = 2,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        },
                        new
                        {
                            CourtId = 9,
                            Address = "523-573 Washtenaw Ave, Ann Arbor, MI, 48109",
                            IsCovidOpen = true,
                            IsIndoor = false,
                            Name = "Palmer Field Basketball Courts",
                            NumberOfHoops = 2,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        },
                        new
                        {
                            CourtId = 10,
                            Address = "2300 W Idaho St, Boise, ID, 83702",
                            IsCovidOpen = true,
                            IsIndoor = false,
                            Name = "Fairview Park",
                            NumberOfHoops = 2,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        },
                        new
                        {
                            CourtId = 11,
                            Address = "W Uintah St & 24th St, Colorado Springs, CO, 80904",
                            IsCovidOpen = true,
                            IsIndoor = false,
                            Name = "Thorndale Park",
                            NumberOfHoops = 4,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        },
                        new
                        {
                            CourtId = 12,
                            Address = "1440 N Campus Dr, Brookings, SD, 57006",
                            IsCovidOpen = true,
                            IsIndoor = true,
                            Name = "Miller Wellness Center",
                            NumberOfHoops = 6,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        },
                        new
                        {
                            CourtId = 13,
                            Address = "7770 Dean Martin Dr #305, Las Vegas, NV, 89139",
                            IsCovidOpen = true,
                            IsIndoor = true,
                            Name = "Hoop City Las Vegas",
                            NumberOfHoops = 4,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        },
                        new
                        {
                            CourtId = 14,
                            Address = "401 Berry St, San Francisco, CA, 94158",
                            IsCovidOpen = true,
                            IsIndoor = false,
                            Name = "Mission Creek Park-Basketball Court",
                            NumberOfHoops = 4,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        },
                        new
                        {
                            CourtId = 15,
                            Address = "645 Hayes St, San Francisco, CA, 94102",
                            IsCovidOpen = true,
                            IsIndoor = false,
                            Name = "Hayes Valley Basketball Court",
                            NumberOfHoops = 2,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        },
                        new
                        {
                            CourtId = 16,
                            Address = "Portland Heights Park, Portland, OR, 97201",
                            IsCovidOpen = true,
                            IsIndoor = false,
                            Name = "Portland Heights Park",
                            NumberOfHoops = 2,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        },
                        new
                        {
                            CourtId = 17,
                            Address = "5576 SE Division St, Portland, OR, 97206",
                            IsCovidOpen = true,
                            IsIndoor = false,
                            Name = "Clinton City Park",
                            NumberOfHoops = 2,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        });
                });

            modelBuilder.Entity("open_court.Models.Review", b =>
                {
                    b.Property<int>("ReviewId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("CourtId")
                        .HasColumnType("int");

                    b.Property<DateTime>("PostDate")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("ReviewText")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("ReviewId");

                    b.HasIndex("CourtId");

                    b.ToTable("Reviews");

                    b.HasData(
                        new
                        {
                            ReviewId = 1,
                            CourtId = 1,
                            PostDate = new DateTime(2021, 5, 19, 23, 45, 12, 482, DateTimeKind.Local).AddTicks(3290),
                            ReviewText = "Best place to hoop in Tacoma!"
                        });
                });

            modelBuilder.Entity("open_court.Models.Review", b =>
                {
                    b.HasOne("open_court.Models.Court", "Court")
                        .WithMany("Reviews")
                        .HasForeignKey("CourtId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Court");
                });

            modelBuilder.Entity("open_court.Models.Court", b =>
                {
                    b.Navigation("Reviews");
                });
#pragma warning restore 612, 618
        }
    }
}
