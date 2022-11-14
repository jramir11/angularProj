import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
   constructor(private _http:HttpClient) {
    }

    getAll() {
        return this._http.get(environment.baseUrlgetAll)
    }

    getById(id:String) {
    let url = `${environment.baseUrlgetId}/${id}`;
    console.log(url);
    return this._http.get(url)
    }

    delById(id:String) {    //delete
      let url = `${environment.baseUrldelId}/${id}`;
      return this._http.delete(url);
      }

    // putById(id:String) {        //Update
    //   let url = `${environment.baseUrlputId}/${id}`;
    //   return this._http.put(url);
    //   }


}
