import { Component, OnInit } from '@angular/core';
import { Personas } from './personas';
import { PersonasComponent } from './personas.component';
import { PersonasService } from './personas.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-formpersonas',
  templateUrl: './formpersonas.component.html',
  styleUrls: ['./formpersonas.component.scss']
})
export class FormpersonasComponent  implements OnInit{
 
  public personasform: Personas = new (Personas);
  public id_persona: number = 0;
  selectRole: string = "";
  
  public titulo: String = "Crear Personas"

  form;
  constructor(private personaService: PersonasService, private router: Router, 
    private activatedRouter: ActivatedRoute,
    public dialogRef: MatDialogRef<PersonasComponent>,
    private formBuilder: FormBuilder
    ) { 
      this.form = formBuilder.group({
        cedula: ['', Validators.required],
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        direccion: ['', Validators.required],
        telefono: ['', Validators.required],
        correo: ['', Validators.required]
        
      })
    }

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    
        if (this.id_persona) {
          this.personaService.get(this.id_persona).subscribe(
            personas => this.personasform = personas
          );
        }
      
    
  }
public create(): void {
  if (this.form.valid){
    this.personaService.create(this.personasform).subscribe(
      cancelar => this.cancelar()
    )
    Swal.fire('Persona guardada', `La Persona ${this.personasform.nombre_persona} se a creado con éxito`,'success')
  }else{
    alert('Revise que los campos esten llenados correctamente')
  }
  
}

public update(id_persona: number):void {
  this.personaService.update(this.personasform,id_persona).subscribe(
    cancelar => this.cancelar()
  )
}

public cancelar(): void{
  this.dialogRef.close();
}

}
