///// Alfonso Espinoza Chevez
import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedoresService } from '../proveedores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  templateUrl: './modificarproveedores.component.html',
  styleUrls: ['./modificarproveedores.component.scss']
})

export class ModificarproveedoresComponent implements OnInit {


  proveedoresForm: FormGroup;  
  proveedores: any;

  constructor(

    public fb: FormBuilder,
    public proveedoresService:ProveedoresService,
    public router: Router

  ){}

  ngOnInit(): void{
    this.proveedoresForm = this.fb.group({
      nombre_proveedor : ['',Validators.required],
      direccion_proveedor : ['',Validators.required],
      telefono_proveedor : ['',Validators.required],
    })

    this.proveedoresService.getAllProveedores().subscribe( resp=>{
      this.proveedores = resp;
      console.log(resp);
    },
    error=>{console.error(error)}
    )
  }



  //
  regresaraproveedores(){
    this.router.navigate(['/proveedores'])
  }
  //
  traerinfo(id:string):void{
    this.proveedoresService.getAllProveedores
  }

}

