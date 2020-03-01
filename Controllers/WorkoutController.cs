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
          //  using (var context = new ApplicationDbContext())
          //  {
               
               // context.Remove(id);
              //  context.SaveChanges();
              //  return NoContent();


                using (ApplicationDbContext context = new ApplicationDbContext())
                {
                    var deleteworkout = context.Workouts.FirstOrDefault(w => w.Id == id);
                if (deleteworkout != null) {
                    context.Workouts.Remove(deleteworkout);
                    context.SaveChanges();
                    
                }
                return NoContent();
            }
           

           // }

        



        }

    




    }
}