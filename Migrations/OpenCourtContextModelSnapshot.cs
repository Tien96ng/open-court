﻿// <auto-generated />
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
                            Address = "2323 N Shirley St, Tacoma, WA 98407",
                            IsCovidOpen = true,
                            IsIndoor = false,
                            Name = "Kandle Park",
                            NumberOfHoops = 6,
                            TotalRating = 0,
                            TotalRatingCount = 0
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
