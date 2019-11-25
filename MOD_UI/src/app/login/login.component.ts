import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginUserData={}
  constructor(private _auth: AuthService,
    private _router :Router) { }

  ngOnInit() {
  }
  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res);
        if(res.userInfo.role == 3){
        localStorage.setItem('token',res.token)
        localStorage.setItem('id',res.userInfo.id)
        localStorage.setItem('email',res.userInfo.email)
        localStorage.setItem('firstname',res.userInfo.firstName)
        localStorage.setItem('lastname',res.userInfo.lastName)
        this._router.navigate(['/studentdboard'])
        }
        else{
          console.log("not a student")
        }
      },
    err => console.log(err)
    )
  }
}
