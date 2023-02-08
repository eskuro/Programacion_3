using Kiosko.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Kiosko.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MarcaController : ControllerBase
    {

        private readonly KioskoContext _dbContext;

        public MarcaController(KioskoContext dbContext)
        {
            _dbContext = dbContext;
        }



        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<Marca> lista = _dbContext.Marcas.ToList();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("Nuevo")]
        public async Task<IActionResult> Nuevo([FromBody] Marca request)
        {

            await _dbContext.Marcas.AddAsync(request);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK);

        }

        [HttpDelete]
        [Route("Borrar/{id:int}")]
        public async Task<IActionResult> Borrar(int id)
        {

            Marca marca = _dbContext.Marcas.Find(id);

            _dbContext.Marcas.Remove(marca);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK);


        }

        [HttpPut]
        [Route("Modificar")]
        public async Task<IActionResult> Modificar([FromBody] Marca request)
        {

            _dbContext.Marcas.Update(request);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK);
        }


    }
}