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
       
        [HttpPost]
        [Route("Nuevo")]
        public async Task<IActionResult> Nuevo([FromBody] Usuario request)
        {

            await _dbContext.Usuarios.AddAsync(request);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK);

        }

        [HttpDelete]
        [Route("Borrar/{id:int}")]
        public async Task<IActionResult> Borrar(int id)
        {

            Usuario rubro = _dbContext.Usuarios.Find(id);

            _dbContext.Usuarios.Remove(rubro);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK);


        }
        [HttpPut]
        [Route("Modificar")]
        public async Task<IActionResult> Modificar([FromBody] Usuario request)
        {

            _dbContext.Usuarios.Update(request);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK);
        }

        [HttpGet("{user}/{password}")]
        public ActionResult<List<Usuario>> GetInicioSesion(string user, string password) 
        {
            var usuarios = _dbContext.Usuarios.Where(a => a.Username.Equals(user) && a.Password.Equals(password)).ToList();
            return usuarios;
        }
    }
}
