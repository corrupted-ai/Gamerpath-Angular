import { Component, OnInit } from '@angular/core';
import {HttpserviceService,Post} from '../httpservice.service';
@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css']
})
export class AllpostsComponent implements OnInit {

  posts:Post[]

  constructor(private http:HttpserviceService) { }

  ngOnInit() {
    console.log("Oninit of allposts")
    this.http.getallposts().subscribe(
      response=>this.handleSuccessfulResponse(response)
    )
  }
  handleSuccessfulResponse(response) {
    this.posts = response
  }
  viewpost(postid:string){
    console.log("clicked view thread")
    this.http.postid=postid
    this.http.right = "thread"
  }

}
