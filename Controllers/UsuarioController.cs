using Kiosko.Models;
using Microsoft.AspNetCore.Mvc;

namespace Kiosko.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly KioskoContext _dbContext;

        public UsuarioController(KioskoContext dbContext)
        {
            _dbContext = dbContext;
        }


        [HttpGet]
        public async Task<IActionResult> Get() 
        {
            List<Usuario> lista = _dbContext.Usuarios.ToList();

            return StatusCode(StatusCodes.Status200OK, lista);

        }
       


        [HttpGet("{user}/{password}")]
        public ActionResult<List<Usuario>> GetInicioSesion(string user, string password) 
        {
            var usuarios = _dbContext.Usuarios.Where(a => a.Username.Equals(user) && a.Password.Equals(password)).ToList();




            return usuarios;


        
        }
    }
}
