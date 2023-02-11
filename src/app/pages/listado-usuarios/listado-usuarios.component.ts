import { Usuarios } from '@/clases/Usuarios';
import { UsuariosService } from '@/servicios/usuarios.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent {
  listaUsuarios: Usuarios[]=[];

  
  constructor(private usuariosService: UsuariosService ) { }



  ngOnInit(): void {

  this.usuariosService.getUsuarios().subscribe(
   listausua=>this. listaUsuarios=listausua );
 
  }
}
