using Microsoft.EntityFrameworkCore;
using webapi.ViewModel;

namespace webapi.EntityData
{
    public class products_entity:DbContext
    {
        public products_entity(DbContextOptions<products_entity> options):base(options)
        {

        }

        public DbSet<Products> Product{get;set;}
    }
}   