import { Usuarios } from '@/clases/Usuarios';
import { UsuariosService } from '@/servicios/usuarios.service';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditarUsuarioComponent } from '@pages/editar-usuario/editar-usuario.component';
@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent {
  listaUsuarios: Usuarios[]=[];

  
  constructor(private usuariosService: UsuariosService, public dialog: MatDialog 
    ) { }



  ngOnInit(): void {
 this.listarUsuarios();

 
  }
  listarUsuarios():void{
    this.usuariosService.getUsuarios().subscribe(
      listausua=>this. listaUsuarios=listausua );
  

}

openDialog(id_persona: number) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = "55%";
  dialogConfig.autoFocus = true;
  const dialogRef = this.dialog.open(EditarUsuarioComponent, dialogConfig);



}

}