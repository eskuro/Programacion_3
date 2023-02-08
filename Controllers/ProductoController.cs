using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Kiosko.Models;
namespace Kiosko.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly KioskoContext _dbContext;

        public ProductoController(KioskoContext dbContext)
        {
            _dbContext = dbContext;
        }



        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            
            
            List<ProductoViewModel> lista = _dbContext.Productos.Select(x => new ProductoViewModel
            {
                ProductoId = x.ProductoId,
                ProductoCodigo = x.ProductoCodigo,
                ProductoDesc = x.ProductoDesc,
                ProductoPrecio = x.ProductoPrecio,
                FechaAlta = x.FechaAlta,
                MarcaId = x.MarcaId,
                MarcaDesc = _dbContext.Marcas.Where(a=>a.MarcaId == x.MarcaId).FirstOrDefault().MarcaDesc,
                RubroId = x.RubroId,
                RubroDesc = _dbContext.Rubros.Where(a => a.RubroId == x.RubroId).FirstOrDefault().RubroDesc
            }).ToList();

        
            




            return StatusCode(StatusCodes.Status200OK,lista);
        }

        [HttpPost]
        [Route("Nuevo")]
        public async Task<IActionResult> Nuevo([FromBody] Producto request) 
        {

            await _dbContext.Productos.AddAsync(request);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK,"ok");

        }

        [HttpDelete]
        [Route("Borrar/{id:int}")]
        public async Task<IActionResult> Borrar(int id)
        {

            Producto prod = _dbContext.Productos.Find(id);

            _dbContext.Productos.Remove(prod);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK);


        }

        [HttpPut]
        [Route("Modificar")]
        public async Task<IActionResult> Modificar([FromBody] Producto request)
        {

            _dbContext.Productos.Update(request);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK);
        }


    }
}
