using System;
using System.Collections.Generic;

namespace Kiosko.Models;

public partial class Producto
{
    public int ProductoId { get; set; }

    public string? ProductoDesc { get; set; }

    public DateTime? FechaAlta { get; set; }

    public int? ProductoCodigo { get; set; }

    public decimal? ProductoPrecio { get; set; }

    public int? MarcaId { get; set; }

    public int? RubroId { get; set; }
}
