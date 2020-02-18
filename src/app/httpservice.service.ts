import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export class Post{

  constructor(
    /* id:string,
    datetime:string,
    replies:Reply[] */){}
}

export class Reply{

  constructor(
    /* replyinfo:string,
    id:string, */
    ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  postid:string;
  post:Post;
  left:string = "log";
  middle:string = "post";
  right:string = "post";

  private baseurl = 'http://localhost:8080';

  constructor(private httpclient:HttpClient) { }

  getallposts(){
    return this.httpclient.get<Post[]>(this.baseurl+'/posts')
  }
  getpopularposts(){
    return this.httpclient.get<Post[]>(this.baseurl+'/posts/popular')
  }
  getthread(id:string){
    return this.httpclient.get<Reply[]>(this.baseurl+'/post/'+id+'/replys')
  }
  getpost(id:string){
    return this.httpclient.get<Post>(this.baseurl+'/post/'+id)
  }


}
