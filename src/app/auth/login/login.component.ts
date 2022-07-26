import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';
import { loginStart } from '../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup
  constructor(private strore:Store<AppState>) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.pattern('[^ @]*@[^ @]*')]),
      'password':new FormControl('',[Validators.required])
    })
  }

  get f(){
    return this.loginForm.controls
  }
  onLogin(){
  const email = this.loginForm.value.email;
  const password = this.loginForm.value.password;
  this.strore.dispatch(setLoadingSpinner({status:true}))
this.strore.dispatch(loginStart({email,password}))
  }

}
