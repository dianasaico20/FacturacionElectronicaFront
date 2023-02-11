import { Persona } from '@/clases/Persona';
import { MatTable } from '@angular/material/table';
import { PersonaService } from '@/servicios/persona.service';
import Swal from 'sweetalert2';
import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import {map, Observable, startWith} from "rxjs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Usuarios } from '@/clases/Usuarios';
import { UsuariosService } from '@/servicios/usuarios.service';
import {Router} from "@angular/router";
import {MatSelectionListChange} from "@angular/material/list";
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent implements OnInit{
  issloading=true;
  isexist?:boolean;
  isLinear = true;

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  persona:Persona[]=[];
  personasselect: Persona= new Persona();
  usuario:Usuarios[]=[];

  filteredOptions?: Observable<Persona[]>;
  myControl = new FormControl();
  firstFormGroup: FormGroup |  null= null;
  secondFormGroup: FormGroup | null= null
  public asignaUsua: Usuarios= new Usuarios();

  constructor(private _formBuilder: FormBuilder,
    private personaService:PersonaService,
    private usuarioService:UsuariosService,
    private router: Router) {}

  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({
      firstCotrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

  
    this.personaService.listarPersona().subscribe(data=>{
      this.persona=data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(values=>this.filter(values)),
      );
      this.issloading=false;
    })

  }

  

  selectionPersona( event: MatSelectionListChange){
    this.personasselect=  event.options[0].value;
 // console.log(this.docentesselect.primerapellido)
  // this.docentesselect= docentesselect.options.values

  }

  filter(value: any): Persona[] {
    const filterValue = value.toLowerCase();
    return this.persona.filter(option => 
      option.cedula?.toLocaleLowerCase().includes(filterValue)
      ||option.nombre_persona?.toLocaleLowerCase().includes(filterValue)
      ||option.apellido_persona?.toLocaleLowerCase().includes(filterValue)
      ||option.correo_persona?.toLocaleLowerCase().includes(filterValue)
    );
  
  }
  
 /* usuarios:Usuarios = new Usuarios();
  obtnerdatos(persona:Persona):Usuarios{
    this.usuarios.password
    this.usuarios.user

    return this.usuarios;
  }*/



//GuardarResaposable de Prácticas
/*guardarRepresentante(docente:Docentes):void{
  Swal.fire({
    title: 'Confirmación',
    text: "El docente ha sido seleccionado como Responsable de Prácticas Preprofesionales",
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Aceptar',
    background: "#fbc02d"
  }).then((result) => {
    if (result.isConfirmed) {
      this.representanteService.create(this.obtnerdatos(docente)).subscribe(value => {
        Swal.fire({
          title: 'Asignación Correcta',
          icon: 'success',
          iconColor :'#17550c',
          color: "#0c3255",
          confirmButtonColor:"#0c3255",
          background: "#63B68B",
        })
        
  
      })
    }
  })

}*/




}

