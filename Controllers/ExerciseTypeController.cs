using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Mvc;

namespace capstone.Controllers
{
    public class ExerciseTypeController : Controller
    {
        [HttpGet]
        public IEnumerable<ExerciseType> Get()
        {
            ExerciseType[] exercisetypes = null;
            using (var context = new ApplicationDbContext())
            {
                return context.ExerciseTypes;
                                       
            }
            return exercisetypes;

        }

    }
}