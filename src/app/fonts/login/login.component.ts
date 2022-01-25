import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isFormValid = false
  isValidCredential = false

  loginData:any = [{email:'admin@kaze.com',password:'admin'}]

  constructor(private router:Router,private auth:AuthService,private login:LoginService) { }

  ngOnInit(): void {
    const token = sessionStorage.getItem('key')

    if(token) this.auth.auth = true

    if(this.auth.auth){
      this.router.navigateByUrl('desktop')
    }

  }

  async onLogin(login:NgForm){

    if(!login.valid){
      this.isFormValid = true
      this.isValidCredential = false
      return
    }

    const loginCredentials = await this.login.onPost([login.value.email,login.value.password])

    loginCredentials.subscribe((data:any) => {
      console.log(data)
      this.auth.auth = true
      sessionStorage.setItem('key', data.access)
      this.router.navigateByUrl('desktop')
    },
    error => {

      this.isFormValid = false
      this.isValidCredential = true
      return

    })

  }

}
