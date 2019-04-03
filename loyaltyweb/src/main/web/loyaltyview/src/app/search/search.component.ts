import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validator, Validators} from '@angular/forms'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  messageForm : FormGroup;
  submitted : boolean = false;
  success : boolean = false;
   
  constructor(private formBuuilder : FormBuilder){

    this.messageForm = this.formBuuilder.group({
      name :['',Validators.required],
      message :['',Validators.required]
    })
  }

  onSubmitted(){
    this.submitted = true;
    if(this.messageForm.invalid){
      return;
    }
    this.success=true;
  }

  ngOnInit() { }

}
