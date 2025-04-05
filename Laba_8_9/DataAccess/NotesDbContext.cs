using Microsoft.EntityFrameworkCore;
using Laba_8_9.Models;

namespace Laba_8_9.DataAccess
{
    public class NotesDbContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public NotesDbContext(IConfiguration configuration)
        { 
            _configuration = configuration;
        }

        public DbSet<Note> Notes => Set<Note>();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_configuration.GetConnectionString("Database"));

        }
    }
}
