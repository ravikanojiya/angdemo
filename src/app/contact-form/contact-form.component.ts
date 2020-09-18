import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
// form:FormGroup;
myform=new FormGroup({
  username:new FormControl('',[Validators.required,
  Validators.minLength(3)]),
  password:new FormControl('',Validators.required)
});
get username(){
  return this.myform.get('username');
}
get password(){
  return this.myform.get('password');
}
 login(){
   this.myform.setErrors({
     invalidLogin:true
   })
 }
  constructor() { }

  ngOnInit() {
  }

}
