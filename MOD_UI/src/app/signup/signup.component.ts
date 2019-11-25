import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  registerUserData = {"Role":3}
  constructor(private _auth: AuthService,private http: HttpClient,
    private _router :Router) { }

  ngOnInit() {
  }
  
  registerUser(){
    console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)

  .subscribe(
    res => {
      console.log(res)
      localStorage.setItem('token',res.token)
      this._router.navigate(['/login'])
    },
    err => console.log(err)
  )
  }

}
