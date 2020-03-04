using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;

namespace capstone.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class WorkoutController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<Workout> Get()
        {
            Workout[] workouts = null;
            using (var context = new ApplicationDbContext())
            {
                workouts = context.Workouts.ToArray();
            }
            return workouts;

        }

              [HttpGet("{workoutDate}")]
        public IEnumerable<Workout> Getdate(DateTime workoutDate)
        {
            
            using (var context = new ApplicationDbContext())
            {
                var workoutdatelist = context.Workouts.Where(w=>w.workoutDay==workoutDate).ToList();
               return workoutdatelist;
                
            }
            
        }




        [HttpPost]
        public Workout Post([FromBody]Workout workout)
        {
            using (var context = new ApplicationDbContext())
            {
                context.Workouts.Add(workout);
                context.SaveChanges();
            }
            return workout;
        }



        [HttpDelete("{id}")]
        public IActionResult Delete(int id )
        {

                using (ApplicationDbContext context = new ApplicationDbContext())
                {
                    var deleteworkout = context.Workouts.FirstOrDefault(w => w.id == id);
                if (deleteworkout != null) {
                    context.Workouts.Remove(deleteworkout);
                    context.SaveChanges();
                    
                }
                return NoContent();
            }



        }

    




    }
}