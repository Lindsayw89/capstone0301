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
    [ApiController]
    [Route("[controller]")]
    public class ExerciseTypeController : ControllerBase
    {

       
        [HttpGet]
        public IEnumerable<ExerciseType> Get()
        {
            ExerciseType[] exercisetypes = null;
            using (var context = new ApplicationDbContext())
            {
                return context.ExerciseTypes.ToArray();
                                       
            }
            return exercisetypes;

        }

    }
}