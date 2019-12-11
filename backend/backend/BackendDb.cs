using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class BackendDb : DbContext
    {
        public BackendDb(DbContextOptions<BackendDb> options) :
            base(options)
        {
        }

        public DbSet<Order> Orders { get; set; }
    }
}
