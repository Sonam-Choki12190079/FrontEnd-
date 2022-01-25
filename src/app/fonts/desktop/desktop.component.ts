import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  D:any;
  notice:any

  constructor(private project:ProjectService, private auth:AuthService,private router:Router) { }

  ngOnInit(): void {

    this.project.onGet().subscribe((data:any)=>{

      this.D = data

    })

    this.project.onNotify().subscribe((data:any)=>{

      this.notice = data.length

    })

  }

  onData(data:any){

    this.project.onSearch(data.value).subscribe((data:any)=>{

      this.D = data

      console.log(this.D)

    })

  }

  noticeUpdate(){
    this.project.onNotify().subscribe((data:any)=>{

      this.D = data

    })
  }
  

}
