using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Entities
{
    public class Order
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        public Guid OrderNumber { get; set; }
        [DataType(DataType.Date)]
        public DateTime OrderDate { get; set; }
        [DataType(DataType.Currency)]
        public decimal OrderTotal { get; set; }
        public string CustomerName { get; set; }

    }
}
