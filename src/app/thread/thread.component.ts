import { Component, OnInit } from '@angular/core';
import {HttpserviceService,Reply, Post} from '../httpservice.service';
@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  replys:Reply[]
  post:Post = new Post()

  constructor(private http:HttpserviceService) { }

  ngOnInit() {
    console.log("Oninit of thread")
    this.http.getthread(this.http.postid).subscribe(
      response=>this.handleSuccessfulResponse(response)
    )
    this.http.getpost(this.http.postid).subscribe(
      response=>this.handleSuccessfulResponse2(response)
    )
  }
  handleSuccessfulResponse(response) {
    this.replys = response
  }
  handleSuccessfulResponse2(response) {
    this.post = response
  }

}
