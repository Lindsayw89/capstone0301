using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;

namespace capstone.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class WorkoutExercisesController : Controller
    {


        [HttpGet]
        public IEnumerable<WorkoutExercise> Get()
        {
            WorkoutExercise[] workoutExercises = null;
            using (var context = new ApplicationDbContext())
            {
                workoutExercises = context.WorkoutExercises
                            .Include(we => we.exercise)
                            .Include(we => we.workout).ToArray();
                   
            }
            return workoutExercises;

        }


   



        [HttpPost]
        public WorkoutExercise Post([FromBody]WorkoutExercise workoutExercise)
        {
            workoutExercise.WorkoutForeignKey = workoutExercise.workout.id;
            workoutExercise.ExerciseForeignKey = workoutExercise.exercise.id;
            workoutExercise.workout = null;
            workoutExercise.exercise = null;
            using (var context = new ApplicationDbContext())
            {
                context.WorkoutExercises.Add(workoutExercise);
                context.SaveChanges();
            }
            return workoutExercise;
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {

            using (ApplicationDbContext context = new ApplicationDbContext())
            {
                var deleteworkoutEx = context.WorkoutExercises.FirstOrDefault(w => w.id == id);
                if (deleteworkoutEx != null)
                {
                    context.WorkoutExercises.Remove(deleteworkoutEx);
                    context.SaveChanges();

                }
                return NoContent();
            }

        }

    }
}

