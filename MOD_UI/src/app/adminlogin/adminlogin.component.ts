import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  loginUserData ={}
  constructor(private _auth: AuthService,
    private _router :Router) { }

  ngOnInit() {
  }
  loginAdmin(){
    this._auth.loginAdmin(this.loginUserData)
  .subscribe(
    res => {
      if(res.userInfo.role == 1){
      console.log(res)
      localStorage.setItem('token',res.token)
      localStorage.setItem('id',res.userInfo.id)
      localStorage.setItem('email',res.userInfo.email)
      localStorage.setItem('firstname',res.userInfo.firstName)
      localStorage.setItem('lastname',res.userInfo.lastName)
      this._router.navigate(['/admindashboard'])
      }
      else{
        console.log("this is not admin")
      }
    },
  err => console.log(err)
  )
  }
}
