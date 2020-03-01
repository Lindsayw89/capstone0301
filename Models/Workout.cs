using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace capstone.Models
{
    public class Workout
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]

        public int Id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string workoutType { get; set; }
        public DateTime workoutDay { get; set; }
        public int calories { get; set; }
    }
}
