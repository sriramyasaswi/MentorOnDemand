import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';

import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AuthGuard } from './auth.guard';
import { UserlistComponent } from './userlist/userlist.component';
import { MentorlistComponent } from './mentorlist/mentorlist.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
import { CourselistComponent } from './courselist/courselist.component';

import { MentordboardComponent } from './mentordboard/mentordboard.component';
import { StudentdboardComponent } from './studentdboard/studentdboard.component';
import { AddtrainingComponent } from './addtraining/addtraining.component';
import { TrainingslistComponent } from './trainingslist/trainingslist.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { MentorongoingtrainingsComponent } from './mentorongoingtrainings/mentorongoingtrainings.component';
import { MentorcompletedtrainingsComponent } from './mentorcompletedtrainings/mentorcompletedtrainings.component';
import { ApplytrainingComponent } from './applytraining/applytraining.component';
import { OngoingtrainingsComponent } from './ongoingtrainings/ongoingtrainings.component';
import { CompletedtrainingsComponent } from './completedtrainings/completedtrainings.component';

const routes: Routes = [
  {
    path:"",redirectTo:'/home',pathMatch:'full'
  },
  {
    path:"Signup",
    component:SignupComponent
  },
 
  {
    path:"mentorsignup",
    component:MentorsignupComponent
  },
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'userlist', component: UserlistComponent },
      { path: 'mentorlist', component: MentorlistComponent },
      {path: 'addcourse',component: AddcourseComponent      },
      {path: 'editcourse/:id',component: EditcourseComponent},
      { path: 'courselist', component: CourselistComponent },
      { path: 'traininglist', component: TrainingslistComponent },
      { path: 'paymentlist', component: PaymentlistComponent }
    ]
  },
 {
   path:"home",
   component:HomeComponent
 },
 {
  path:"mentordboard",
  component:MentordboardComponent,
  canActivate: [AuthGuard],

  children: [
    { path: 'addtraining', component: AddtrainingComponent },
    { path: 'mentorongoingtrainings', component: MentorongoingtrainingsComponent },
    { path: 'mentorcompletedtrainings', component: MentorcompletedtrainingsComponent }
  ]
},
{
  path:"studentdboard",
  component:StudentdboardComponent,
  canActivate: [AuthGuard],

  children: [
    { path: 'applytraining', component: ApplytrainingComponent },
    { path: 'ongoingtrainings', component: OngoingtrainingsComponent },
    { path: 'completedtraining', component: CompletedtrainingsComponent }
    
   
  ]
},
 {
  path:"login",
  component:LoginComponent
},
{
  path:"mentorlogin",
  component:MentorloginComponent
},
{
  path:"adminlogin",
  component:AdminloginComponent
},


{
  path:"header",
  component:HeaderComponent,
},
{
  path:"footer",
  component:FooterComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





















// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { HomepageComponent } from './homepage/homepage.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { CoursesComponent } from './courses/courses.component';
// import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
// import { StudentsignupComponent } from './studentsignup/studentsignup.component';
// import { AboutusComponent } from './aboutus/aboutus.component';
// import { StudentloginComponent } from './studentlogin/studentlogin.component';
// import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
// import { MentorsComponent } from './mentors/mentors.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { AuthGuard } from './auth.guard';
// import { AdminLoginComponent } from './adminlogin/adminlogin.component';
// import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
// import { UserlistComponent } from './userlist/userlist.component';
// import { MentorlistComponent } from './mentorlist/mentorlist.component';
// import { AddcourseComponent } from './addcourse/addcourse.component';
// import { CourselistComponent } from './courselist/courselist.component';
// import { EditcourseComponent } from './editcourse/editcourse.component';
// import { UserdboComponent } from './userdbo/userdbo.component';
// import { MentordboComponent } from './mentordbo/mentordbo.component';
// import { UserprofileComponent } from './userprofile/userprofile.component';
// import { EdituserprofileComponent } from './edituserprofile/edituserprofile.component';
// import { MentorprofileComponent } from './mentorprofile/mentorprofile.component';
// import { EditmentorprofileComponent } from './editmentorprofile/editmentorprofile.component';
// import { CompletedtrainingsComponent } from './completedtrainings/completedtrainings.component';
// import { OngoingtrainingsComponent } from './ongoingtrainings/ongoingtrainings.component';
// import { MentorongoingtrainingsComponent } from './mentorongoingtrainings/mentorongoingtrainings.component';
// import { MentorcompletedtrainingsComponent } from './mentorcompletedtrainings/mentorcompletedtrainings.component';
// import { AddTrainingComponent } from './add-training/add-training.component';
// import { ApplytrainingComponent } from './applytraining/applytraining.component';
// import { PaymentComponent } from './payment/payment.component';
// import { TrainingslistComponent } from './trainingslist/trainingslist.component';
// import { PaymentlistComponent } from './paymentlist/paymentlist.component';


// const routes: Routes = [
//   {
//     path: "aboutus",
//     component: AboutusComponent
//   },
//   {
//     path: "courses",
//     component: CoursesComponent
//   },
//   {
//     path: 'studentlogin',
//     component: StudentloginComponent
//   },
//   {
//     path: 'mentorlogin',
//     component: MentorloginComponent
//   },
//   {
//     path: 'mentorsignup',
//     component: MentorsignupComponent
//   },
//   {
//     path: 'home',
//     component: HomepageComponent
//   },
//   {
//     path: 'navbar',
//     component: NavbarComponent
//   },
//   {
//     path: 'studentsignup',
//     component: StudentsignupComponent
//   },
//   {
//     path: 'mentors',
//     component: MentorsComponent
//   },
//   {
//     path: 'dashboard',
//     component: DashboardComponent,
//     canActivate: [AuthGuard]
//   },
//   {
//     path: 'userdb',
//     component: UserdboComponent,
//     canActivate: [AuthGuard],
//     children: [
//       { path: 'userprofile', component: UserprofileComponent},
//       { path: 'edituser', component: EdituserprofileComponent},
//       { path: 'usercompleted', component: CompletedtrainingsComponent},
//       { path : 'userongoing', component: OngoingtrainingsComponent},
//       {
//         path : 'applytraining',component : ApplytrainingComponent
//       },
//       { path: 'payments',component:PaymentComponent}
//     ]
//   },
//   {
//     path: 'mentordb',
//     component: MentordboComponent,
//     canActivate: [AuthGuard],
//     children: [
//       { path: 'mentorprofile', component: MentorprofileComponent},
//       { path: 'editmentor', component: EditmentorprofileComponent},
//       { path : 'mentorongoing', component: MentorongoingtrainingsComponent},
//       { path : 'mentorcompleted', component: MentorcompletedtrainingsComponent},
//       { path: 'addtraining',component: AddTrainingComponent}
//     ]
//   },
//   {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: "full"
//   },
//   {
//     path: 'adminlogin',
//     component: AdminLoginComponent
//   },
//   {
//     path: 'admindashboard',
//     component: AdmindashboardComponent,
//     canActivate: [AuthGuard],
//     children: [
//       { path: 'userlist', component: UserlistComponent },
//       { path: 'mentorlist', component: MentorlistComponent },
//       {
//         path: 'addcourse',
//         component: AddcourseComponent
//       },
//       {
//         path: 'editcourse/:id',
//         component: EditcourseComponent
//       },
//       { path: 'courselist', component: CourselistComponent },
//       { path: 'traininglist', component: TrainingslistComponent },
//       { path: 'paymentlist', component: PaymentlistComponent },
//     ]
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
