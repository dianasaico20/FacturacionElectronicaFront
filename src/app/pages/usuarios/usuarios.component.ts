import { Component,  ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent {
  columnas: string[] = ['codigo', 'usuario', 'rol', 'borrar'];

  datos: Articulo[] = [new Articulo(1, 'Andre',"Administrador"),
  new Articulo(1, 'Xavier_12',"Vendedor"),
  new Articulo(1, 'Dani_s',"Vendededor"),
  ];

  articuloselect: Articulo = new Articulo(0, "","");

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar() {
    this.datos.push(new Articulo(this.articuloselect.codigo, this.articuloselect.usuario,this.articuloselect.rol));
    this.tabla1.renderRows();
    this.articuloselect = new Articulo(0, "","" );
  }
}


export class Articulo {
  constructor(public codigo: number, public usuario: string,  public rol: string) {
  }
}