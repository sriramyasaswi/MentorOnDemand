import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.scss']
})
export class MentorsignupComponent implements OnInit {
  registerUserData = {"Role":2}
  constructor(private _auth: AuthService,
    private _router :Router) { }


  ngOnInit() {
  }
  registerMentor(){
    this._auth.registerMentor(this.registerUserData)
  .subscribe(
    res => {
      console.log(res)
      localStorage.setItem('token',res.token)
      this._router.navigate(['/mentorlogin'])
    },
    err => console.log(err)
  )
  }
}
