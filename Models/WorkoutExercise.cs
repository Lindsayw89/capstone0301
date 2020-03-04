using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace capstone.Models
{
    public class WorkoutExercise
    {
        
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int id { get; set; }

        public int ExerciseForeignKey { get; set; }
        [ForeignKey("ExerciseForeignKey")]
        public Exercise exercise { get; set; }

        public int WorkoutForeignKey { get; set; }
        [ForeignKey("WorkoutForeignKey")]
        public Workout workout{ get; set; }

       


    }
}
