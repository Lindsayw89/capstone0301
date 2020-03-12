using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace capstone.Models
{
    public class Exercise
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]

        public int id { get; set; }
        public string title { get; set; }
        public string description { get; set; }


        public int exerciseTypeId { get; set; } // this will be the FKey in the database

        [ForeignKey("exerciseTypeId")]
        public ExerciseType workoutType { get; set; } // this will be in c#


        [InverseProperty("exercise")]
        public List<WorkoutExercise> workoutExercises { get; set; }
        public int calories { get; set; }

    }
}
