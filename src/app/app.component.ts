import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'kaze-project';
  Auth = false;
  
  constructor(private auth:AuthService,private router:Router){}

  routeUpdate(){
    this.Auth = this.auth.auth
  }

}
