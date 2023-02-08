namespace Kiosko.Models
{
    public class ProductoViewModel
    {

        public int ProductoId { get; set; }

        public string? ProductoDesc { get; set; }

        public DateTime? FechaAlta { get; set; }

        public int? ProductoCodigo { get; set; }

        public decimal? ProductoPrecio { get; set; }

        public int? MarcaId { get; set; }

        public string MarcaDesc { get; set; }

        public int? RubroId { get; set; }  
        
        public string RubroDesc { get; set; }

    }
}
