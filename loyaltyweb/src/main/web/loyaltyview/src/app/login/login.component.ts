import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import {DataService} from '../data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userid: new FormControl(''),
    password: new FormControl(''),
  });
  //appTitle : string = 'Login';
  // h1Style:boolean=false;
  users : object;

  constructor(private data: DataService){}
  updateName() {
    
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
  }

  ngOnInit() {
    this.data.getUsers().subscribe(data =>{
      this.users=data
      console.log("****",this.users)
    })
  }

  // firstClick(){
  //   this.data.firstClick();
  // }
}
