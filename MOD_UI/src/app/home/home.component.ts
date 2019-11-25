import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchText;
   courses
   constructor(private http: HttpClient) { }
   get_course_list = function () {
     this.http.get("http://localhost:3000/courselist/").subscribe(
       (result: any[]) => {
         this.courses = result;
         this.error_message = ""
       },
       (error) => {
         this.error_message = "Error occured, check whether Backend is running!";
         console.log(error)
       }
     )
 
   }
   ngOnInit() {
   this.get_course_list()
   console.log(this.courses)
   }
 
 }
 