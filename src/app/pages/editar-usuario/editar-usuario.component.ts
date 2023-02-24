
import { Usuarios } from '@/clases/Usuarios';
import { Component , Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosService } from '@/servicios/usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent {
  usuariosss:Usuarios[]=[];
public texusuario:string;
public texcontrasenia:string;
public idusuario:number;

listaUsuarios: Usuarios[]=[];
  constructor(    @Inject(MAT_DIALOG_DATA) public usuarioedi:Usuarios,     private usuarioService:UsuariosService,) {


    if(this.usuarioedi !==null){
this.texusuario=usuarioedi.user;
this.texcontrasenia=usuarioedi.password;
this.idusuario=usuarioedi.id_usuario;
    }
  }

  ngOnInit() {
   
  }
  usuarioss:Usuarios = new Usuarios();
  obtnerdatos(usuarioedi:Usuarios):Usuarios{
this.usuarioss.user=usuarioedi.user;
this.usuarioss.password=usuarioedi.password;
    return this.usuarioss;
  }
  
  listarUsuarios():void{
    this.usuarioService.getUsuarios().subscribe(
      listausua=>this. listaUsuarios=listausua );
  

}


  public update(id_usuario: number):void {
    this.usuarioService.actualizarUsuario(this.usuarioss, this.idusuario).subscribe(
      res => this.usuarioService.getUsuarios().subscribe(
        listausua=>this. listaUsuarios=listausua 
      )
    );

    
   }
  
  
}
