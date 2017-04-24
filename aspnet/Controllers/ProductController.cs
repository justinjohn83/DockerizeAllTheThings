using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace aspnet.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        [HttpGet]
        public IEnumerable<String> GetAll()
        {
            return new String[] { "Pants", "Khakis", "Pizzas"}.AsEnumerable();
        }
    }
}
