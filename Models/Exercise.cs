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


        public int exerciseTypeId { get; set; }

        [ForeignKey("exerciseTypeId")]
        public ExerciseType workoutType { get; set; }


        [InverseProperty("exercise")]
        public List<WorkoutExercise> workoutExercises { get; set; }
        public int calories { get; set; }

    }
}
