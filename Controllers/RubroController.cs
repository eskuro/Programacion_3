using Kiosko.Models;
using Microsoft.AspNetCore.Mvc;

namespace Kiosko.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RubroController : ControllerBase
    {
        private readonly KioskoContext _dbContext;

        public RubroController(KioskoContext dbContext)
        {
            _dbContext = dbContext;
        }



        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<Rubro> lista = _dbContext.Rubros.ToList();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("Nuevo")]
        public async Task<IActionResult> Nuevo([FromBody] Rubro request)
        {

            await _dbContext.Rubros.AddAsync(request);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK);

        }

        [HttpDelete]
        [Route("Borrar/{id:int}")]
        public async Task<IActionResult> Borrar(int id)
        {

            Rubro rubro = _dbContext.Rubros.Find(id);

            _dbContext.Rubros.Remove(rubro);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK);


        }

        [HttpPut]
        [Route("Modificar")]
        public async Task<IActionResult> Modificar([FromBody] Rubro request)
        {

            _dbContext.Rubros.Update(request);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK);
        }
    }
}
