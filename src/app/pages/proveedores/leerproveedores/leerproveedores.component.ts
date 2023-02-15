///// Alfonso Espinoza Chevez
import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedoresService } from '../proveedores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  templateUrl: './leerproveedores.component.html',
  styleUrls: ['./leerproveedores.component.scss']
})
export class LeerproveedoresComponent implements OnInit {

  proveedoresForm: FormGroup;  
  proveedores: any;

  constructor(

    public fb: FormBuilder,
    public proveedoresService:ProveedoresService,
    public router: Router

  ){}

  ngOnInit(): void{

    this.proveedoresForm = this.fb.group({
      id_proveedor :[''],
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

  //////////////////////
  //////////////////////
  eliminar(proveedor){
    this.proveedoresService.deleteProveedor(this.proveedores).subscribe(resp=>{
      console.log(resp)
      if(resp===true){
        this.proveedores.pop(proveedor)
      }
    })
  }
  //////////////////////
  //////////////////////
  editar(proveedor){
    this.proveedoresForm.setValue({
      id_proveedor:proveedor.id_proveedor,
      nombre_proveedor : proveedor.nombre_proveedor,
      direccion_proveedor : proveedor.direccion_proveedor,
      telefono_proveedor :  proveedor.telefono_proveedor,
    })
  }

  
}