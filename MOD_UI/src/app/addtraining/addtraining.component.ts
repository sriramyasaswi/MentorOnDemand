import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-addtraining',
  templateUrl: './addtraining.component.html',
  styleUrls: ['./addtraining.component.scss']
})
export class AddtrainingComponent implements OnInit {
  
  courses: any;
  TrainingData ={id : -1, commissionAmount : 0, startDate : 0, endDate : 0};
  constructor(private _auth: AuthService) { }

  ngOnInit() {
    this.getCourses()
  }

  getCourses() {
    this._auth.courseList().subscribe(
      res => {
        console.log(res);
        this.courses=res;
      },

      err => console.log(err)
    )
  }


  async addTraining()
  {
    console.log(this.TrainingData)
    this._auth.getCourseById(this.TrainingData.id).subscribe(
      res => {
        console.log(res)
       let record = {
         courseId : res.id,
         CourseName : res.courseName,
         Timings : res.cTimings,
         commissionAmount : this.TrainingData.commissionAmount,
         StartDate : this.TrainingData.startDate,
         EndDate : this.TrainingData.endDate,
         Status : 1,
         mentorId : localStorage.getItem('id'),
         mentorFirstName : localStorage.getItem('firstname'),
         mentorLastName : localStorage.getItem('lastname')
       }

       this._auth.addTraining(record).subscribe(
         res =>
         {
          console.log("Added Successfully!")
          console.log(res)
         }, 
         err => console.log(err)
       )


      },
      err => console.log(err)
    )
    }
  }