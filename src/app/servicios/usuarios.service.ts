import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuarios } from '@/clases/Usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private guardar:string="http://localhost:8080/api/savU";
  private listar:string="http://localhost:8080/api/listU";

usuarioObj: Usuarios[] = [];

  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }




  //Metodo para guardar
  create(usuarioObj: Usuarios):Observable<Usuarios>{
    return this.http.post<Usuarios>(this.guardar, usuarioObj,{headers:this.httpHeaders})
  }

  //Metodo para listar
  getUsuarios(): Observable<Usuarios[]> {
    return this.http
      .get(this.listar)
      .pipe(map((response) => response as Usuarios[]));
  }
}
