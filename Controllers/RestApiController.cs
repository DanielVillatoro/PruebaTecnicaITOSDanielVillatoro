using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PruebaTecnicaITOSDanielVillatoro.Controllers
{
    public class RestApiController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
