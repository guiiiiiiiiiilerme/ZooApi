// C:\Users\Eziel Diniz\ZooApi\Data\ApplicationDbContext.cs

using Microsoft.EntityFrameworkCore;
using ZooApi.Controllers;
using ZooApi.Models;


namespace ZooApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Cuidados> Cuidados { get; set; }
       
    }
}



