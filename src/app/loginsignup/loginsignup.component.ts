import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.css']
})
export class LoginsignupComponent implements OnInit {

  gender:string

  constructor() { }

  ngOnInit() {
    console.log("Oninit of loginsignup")
  }

   change(input:string){
     this.gender=input
  }


  cli(){
  $('#myModal').modal("show")
  }

}
