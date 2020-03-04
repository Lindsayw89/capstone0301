import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) { }


  async get(path, options?) :  Promise<any> {
    return await this.http.get(this.baseUrl + path, options).toPromise();
  }
  async post(path, data, options?) : Promise<any>{
          const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };
    return await this.http.post(this.baseUrl + path, data, httpOptions).toPromise();
  }

}