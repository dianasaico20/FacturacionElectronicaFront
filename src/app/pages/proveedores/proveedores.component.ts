import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedoresService } from './proveedores.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})


export class ProveedoresComponent implements OnInit{

  proveedoresForm: FormGroup;
  proveedores: any;

    constructor(
      public fb: FormBuilder,
      public proveedoresService:ProveedoresService,
      public router: Router


    ){}
    /////////////////////////////////////////////////////
    ngOnInit(): void{

      this.proveedoresForm = this.fb.group({
        nombreproveedor : ['',Validators.required],
        idproveedor : ['',Validators.required],
        direccionproveedor : ['',Validators.required],
        telefonoproveedor : ['',Validators.required],
      })
      /////////////////////////////////////////////////////
      this.proveedoresService.getAllProveedores().subscribe(resp =>{
        this.proveedores = resp;
        console.log(resp);
      },
      error => { console.error(error)}
      )
      /////////////////////////////////////////////////////


    }
    /////////////////////////////////////////////////////
    ///// Para los botones para ir de un lado a otro.
    irpaginacrear(){
    this.router.navigate(['/crearproveedores'])
    }
    //
    irpaginaleer(){
      this.router.navigate(['/leerproveedores'])
    }
    //
    irpaginaborrar(){
      this.router.navigate(['/borrarproveedores'])
    }
    //
    irpaginamodificar(){
      this.router.navigate(['/modificarproveedores'])
    }
    //
    regresaraproveedores(){
      this.router.navigate(['/proveedores'])
    }
    /////////////////////////////////////////////////////
    



}
