import { Component, OnInit } from '@angular/core';
import {HttpserviceService,Post} from '../httpservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  loggedin:string
  posts:Post[]
  constructor(private http:HttpserviceService) { }
  
  ngOnInit() {
    this.loggedin = localStorage.getItem("loggedin")
    console.log(this.loggedin)
    this.http.getallposts().subscribe(
      response=>this.handleSuccessfulResponse(response)
    )
  }
  popular(){
    this.http.getpopularposts().subscribe(
      response=>this.handleSuccessfulResponse(response)
    )
  }
  newest(){
    this.http.getallposts().subscribe(
      response=>this.handleSuccessfulResponse(response)
    )
  }
  handleSuccessfulResponse(response) {
    this.posts = response
    console.log(this.posts)
    this.do()
  }
  tagname(tag:string){
    console.log(tag)
  }
  do(){
    this.posts.forEach(p => {
      p["voted"]="false"
      
    });

    this.posts.filter(p => p["tags"].indexOf("check")>0).forEach(pp =>{
      pp["voted"]="true"
    })
    console.log(this.posts)
  }

}
