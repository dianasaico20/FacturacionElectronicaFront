import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  public API_SERVICE_CREAR="http://localhost:8080/api/proveedor";
  public API_SERVICE_LEER="http://localhost:8080/api/proveedor/lisProve";
  public API_SERVICE_ELIMINAR:"http://localhost:8080/api/proveedor/delProve/";
  ///private API_SERVICE_MODIFICAR="http://localhost:4200/api/lisProve";
  
  
  /////////////////////////
  constructor(
    public httpClient: HttpClient) { }
  /////////////////////////
  public getAllProveedores(): Observable<any>{
    return this.httpClient.get(this.API_SERVICE_LEER);
  }
  /////////////////////////
  public saveProveedor(proveedores:any): Observable<any>{
    return this.httpClient.post(this.API_SERVICE_CREAR,proveedores);
  }
  /////////////////////////
  //public traeruno(id:string): Observable<Proveedor>{
  //  return this.
  //}
  /////////////////////////
  public deleteProveedor(id_proveedor):Observable<any>{
    return this.httpClient.delete(this.API_SERVICE_ELIMINAR+id_proveedor);
  }



}
