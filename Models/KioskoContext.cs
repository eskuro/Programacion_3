using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Kiosko.Models;

public partial class KioskoContext : DbContext
{
    public KioskoContext()
    {
    }

    public KioskoContext(DbContextOptions<KioskoContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Marca> Marcas { get; set; }

    public virtual DbSet<Producto> Productos { get; set; }

    public virtual DbSet<Rubro> Rubros { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-MIG6BCA; DataBase=Kiosko;Integrated Security=true;Encrypt=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Marca>(entity =>
        {
            entity.HasKey(e => e.MarcaId).HasName("PK__Marca__BBC43191576E62CD");

            entity.ToTable("Marca");

            entity.Property(e => e.MarcaId).HasColumnName("marca_id");
            entity.Property(e => e.MarcaDesc)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("marca_desc");
        });

        modelBuilder.Entity<Producto>(entity =>
        {
            entity.HasKey(e => e.ProductoId).HasName("PK__Producto__FB5CEEECE6735939");

            entity.ToTable("Producto");

            entity.Property(e => e.ProductoId).HasColumnName("producto_id");
            entity.Property(e => e.FechaAlta)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("fecha_alta");
            entity.Property(e => e.MarcaId).HasColumnName("marca_id");
            entity.Property(e => e.ProductoCodigo).HasColumnName("producto_codigo");
            entity.Property(e => e.ProductoDesc)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("producto_desc");
            entity.Property(e => e.ProductoPrecio)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("producto_precio");
            entity.Property(e => e.RubroId).HasColumnName("rubro_id");
        });

        modelBuilder.Entity<Rubro>(entity =>
        {
            entity.HasKey(e => e.RubroId).HasName("PK__Rubro__4ADC8F5629EA7EDC");

            entity.ToTable("Rubro");

            entity.Property(e => e.RubroId).HasColumnName("rubro_id");
            entity.Property(e => e.RubroDesc)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("rubro_desc");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.UsuarioId).HasName("PK_Usuarios");

            entity.ToTable("Usuario");

            entity.Property(e => e.UsuarioId).HasColumnName("usuario_id");
            entity.Property(e => e.Password)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.Username)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("username");
            entity.Property(e => e.UsuarioApellido)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("usuario_apellido");
            entity.Property(e => e.UsuarioNombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("usuario_nombre");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
