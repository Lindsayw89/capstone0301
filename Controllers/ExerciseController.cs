using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using capstone.Models;
using capstone.Data;

namespace capstone.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExerciseController : ControllerBase
    {
        

        [HttpGet]
        public IEnumerable<Exercise> Get()
        {
            Exercise[] exercises = null;
            using (var context = new ApplicationDbContext())
            {
                exercises = context.Exercises.ToArray();
            }
            return exercises;

        }




        [HttpPost]
        public Exercise Post([FromBody]Exercise exercise)
        {
            using (var context = new ApplicationDbContext())
            {
                context.Exercises.Add(exercise);
                context.SaveChanges();
            }
            return exercise;
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {

            using (ApplicationDbContext context = new ApplicationDbContext())
            {
                var deleteExercise = context.Exercises.FirstOrDefault(w => w.id == id);
                if (deleteExercise != null)
                {
                    context.Exercises.Remove(deleteExercise);
                    context.SaveChanges();

                }
                return NoContent();
            }

        }



    }
}