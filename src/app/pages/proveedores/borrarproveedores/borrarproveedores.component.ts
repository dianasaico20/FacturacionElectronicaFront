///// Alfonso Espinoza Chevez
import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedoresService } from '../proveedores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  templateUrl: './borrarproveedores.component.html',
  styleUrls: ['./borrarproveedores.component.scss']
})
export class BorrarproveedoresComponent implements OnInit  {

  proveedoresForm: FormGroup;  
  proveedores: any;

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
  //////////////////////
  eliminar(proveedores){
    this.proveedoresService.deleteProveedor(proveedores.idproveedor).subscribe(resp=>{
      console.log(resp)
      if(resp==true){
        this.proveedores.pop(proveedores)
      }
    })
  }

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
