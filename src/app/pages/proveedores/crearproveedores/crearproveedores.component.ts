///// Alfonso Espinoza Chevez
import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedoresService } from '../proveedores.service';
import { Router } from '@angular/router';

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-proveedores',
  templateUrl: './crearproveedores.component.html',
  styleUrls: ['./crearproveedores.component.scss']
})

export class CrearproveedoresComponent implements OnInit  {

  proveedoresForm: FormGroup;  

  constructor(

    public fb: FormBuilder,
    public proveedoresService:ProveedoresService,
    public router: Router

  ){}
  //////////////////////
  //////////////////////
  ngOnInit(): void{

    this.proveedoresForm = this.fb.group({
      nombre_proveedor : ['',Validators.required],
      direccion_proveedor : ['',Validators.required],
      telefono_proveedor : ['',Validators.required],
    })
    
  }

  //////////////////////
  regresaraproveedores(){
    this.router.navigate(['/proveedores'])
  }
  //////////////////////
  guardarproveedores(): void{
    this.proveedoresService.saveProveedor(this.proveedoresForm.value).subscribe(resp => {
      this.proveedoresForm.reset();
    },
     error => { console.error(error)}
    )
  }



}

////// CEMENTERIO DE CODIGOS.
//// Un atributo más de proveedores, esto iba en: "this.proveedoresForm = this.fb.group({"
///idproveedor : ['',Validators.required],