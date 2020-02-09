import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http: HttpClient) { }

  getTran():Observable<any>{
    // console.log()
    // console.log(this.http.get<any[]>("http://localhost:4500/customers/getFriends"))
    return this.http.get<any[]>("http://localhost:4500/customers/getTransaction")
    
  }
}
