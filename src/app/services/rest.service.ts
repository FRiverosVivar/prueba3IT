import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url = "https://mindicador.cl/api"
  constructor(
    private http: HttpClient
  ) { }

  getInitialData(){
    return this.http.request('GET',this.url)
  }
  getValores(codigo:any){
    return this.http.request('GET',this.url + "/"+codigo)
  }
}
