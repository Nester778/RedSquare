using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace RadSquare.Models
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> users { get; set; }
        //public DbSet<News> news { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            //Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //base.OnModelCreating(modelBuilder);
            //modelBuilder.Entity<User>().HasData(
            //    new User[]
            //    {
            //    new User { Name = "Igor", Email = "igor@mail.com", Password = "igor123"},
            //    new User { Name = "Vetalik", Email = "Vetalik@mail.com", Password = "password"},
            //    new User { Name = "Anatolik", Email = "anatolik@gmail.com", Password = "12345"}
            //    });
        }
    }
}
