using Microsoft.EntityFrameworkCore;
using ZooApi.Models;

public class ZooContext : DbContext
{
    public ZooContext(DbContextOptions<ZooContext> options) : base(options) { }

    public DbSet<Animal> Animais { get; set; }
    public DbSet<Cuidado> Cuidados { get; set; } // <-- Adicione esta linha
}