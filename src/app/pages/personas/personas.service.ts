import { Injectable } from '@angular/core';
import { Personas } from './personas';
import { map, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private urlEndPoint:string = '';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  constructor (private http: HttpClient){}
 
  getPersonas():Observable<Personas[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Personas[])
    );

  }
  get(id_persona: number):Observable<Personas>{
    return this.http.get<Personas>(this.urlEndPoint+'/'+id_persona)
  }

  create(personas: Personas): Observable<Personas>{
    return this.http.post<Personas>(this.urlEndPoint, personas,{headers: this.httpHeaders})
  }

  update(personas:Personas, id_persona: number):Observable<Personas>{
    return this.http.put<Personas>(this.urlEndPoint+'/'+id_persona, personas)
  }
  //eliminar
  delete(id_persona:number):Observable<Personas>{
    return this.http.delete<Personas>(this.urlEndPoint+'/'+id_persona)
  }
}
