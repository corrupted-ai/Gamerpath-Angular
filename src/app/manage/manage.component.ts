import { Component, OnInit } from '@angular/core';
import {HttpserviceService,Post} from '../httpservice.service';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  
  left:string = "log"
  right:string = "log"
  middle:string = "log"
  constructor(private http:HttpserviceService) { }

  ngOnInit() {
    console.log("Oninit of manage")
    console.log(this.http.left+ '### ' + this.http.right + "###" +this.http.middle)
    this.left=this.http.left 
    this.right=this.http.right
    this.middle=this.http.middle
  }

}
