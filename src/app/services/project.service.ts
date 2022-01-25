import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  searchKey = ' '

  uri = 'https://pms-backend-tij.herokuapp.com/api/Project'

  constructor(private http:HttpClient, private router:Router) { }

  onGet(){
    return this.http.get(this.uri)
  }

  onSearch(data:string){
    return this.http.get(`${this.uri}/search/?search=${data}`)
  }

  onNotify(){
    return this.http.get(`${this.uri}/notice`)
  }

  onUpdate(data:any){

    
  }

  onCreate(data:any){
    return this.http.post(`${this.uri}/create/`,{
        "project_name": data.project_name,
        "project_category": data.project_category,
        "project_cost": 123453,
        "project_duration": 33,
        "Owner": "sammy",
        "person_in_charge": "jimmy",
        "Date_from": "2/3/21",
        "Date_to": "12/3/21",
        "status": 1,
        "previlage": 3
    }).subscribe(
      data => {alert("Success")
      setTimeout(() =>{
        this.router.navigateByUrl('/desktop')
      },1000)
    },
      error =>alert("Fill in the correct Input"),
    )
  }
}
