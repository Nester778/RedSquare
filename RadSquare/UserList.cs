using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RadSquare.Models;

namespace RadSquare
{
    public static class UserList
    {

        public static void Initialize(AppDbContext context)
        {
            //if (!context.users.Any())
            //{
            //    context.users.AddRange(
            //        new User
            //        {
            //            Id = 1,
            //            Name = "Igor",
            //            Email = "igor@mail.com",
            //            Password = "igor123"
            //        },
            //        new User
            //        {
            //            Id = 2,
            //            Name = "Vetalik",
            //            Email = "Vetalik@mail.com",
            //            Password = "password"
            //        },
            //        new User
            //        {
            //            Id = 3,
            //            Name = "Anatolik",
            //            Email = "anatolik@gmail.com",
            //            Password = "12345"
            //        }
            //    );
            //    context.SaveChanges();
            //}
        }

    }
}
