import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mentorlogin',
  templateUrl: './mentorlogin.component.html',
  styleUrls: ['./mentorlogin.component.scss']
})
export class MentorloginComponent implements OnInit {
  loginUserData ={}
  constructor(private _auth: AuthService,
    private _router :Router) { }

  ngOnInit() {
  }
loginMentor(){
  this._auth.loginMentor(this.loginUserData)
  .subscribe(
    res => {
      if(res.userInfo.role ==2 )
      {
        // this.body = res.mentor
        localStorage.setItem('token',res.token)
        localStorage.setItem('id',res.userInfo.id)
        localStorage.setItem('email',res.userInfo.email)
        localStorage.setItem('firstname',res.userInfo.firstName)
        localStorage.setItem('lastname',res.userInfo.lastName)
      this._router.navigate(['/mentordboard'])}
      else{
        console.log("not a mentor")
      }
    },
  err => console.log(err)
  )
}
}
