import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  id: string | undefined;
  header: string | undefined;
  notice:any
  D:any

  constructor(private route:ActivatedRoute,private project:ProjectService) { }

  ngOnInit(): void {

    this.project.onGet().subscribe((data:any)=>{

      this.D = data

    })

    this.id = String(this.route.snapshot.paramMap.get('id'))
    console.log(this.id)
    this.header = this.id == 'null'? "Add Project": "Edit Project"

    // if (this.header == "Edit Project"){

    //   this.project.onUpdate().subscribe((data:any)=>{

    //     this.D = data
  
    //   })
  

    // }

    this.project.onNotify().subscribe((data:any)=>{

      this.notice = data.length

    })

  }

  async onSubmit(form:NgForm){

    let objs:any = form.value;
    objs['privilage'] = 2
    objs['status'] =  Number(objs['status'])
    console.log(objs)

    this.project.onCreate(objs)
    
  }

  noticeUpdate(){
    this.project.onNotify().subscribe((data:any)=>{

      this.D = data

    })
  }
}
