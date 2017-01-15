using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployePayroll.Models
{
    public interface IEntityRepository<Type>
    {
        List<Type> getAll();

        Type get(string id);

        void update(Type entity);

        void add(Type entity);

        Type remove(Type entity);
    }
}
