import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'https://pms-backend-tij.herokuapp.com/api/Project'

  constructor(private http:HttpClient, private router:Router) { }

  onPost(data:any){

    console.log(data)

    return this.http.post(`${this.uri}/token/`,{

      username:data[0],
      password:data[1]

    })
  }
}