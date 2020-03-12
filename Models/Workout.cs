﻿using System;
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

        public int id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
       
        public DateTime workoutDay { get; set; }

        [InverseProperty("workout")]
        public List<WorkoutExercise> workoutExercises { get; set; } // only will be on backend make believe

    }
}
