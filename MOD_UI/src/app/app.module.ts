import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { MentorlistComponent } from './mentorlist/mentorlist.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { CourselistComponent } from './courselist/courselist.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
import { MentordboardComponent } from './mentordboard/mentordboard.component';
import { StudentdboardComponent } from './studentdboard/studentdboard.component';
import { AddtrainingComponent } from './addtraining/addtraining.component';
import { PaymentsComponent } from './payments/payments.component';
import { ApplytrainingComponent } from './applytraining/applytraining.component';
import { CompletedtrainingsComponent } from './completedtrainings/completedtrainings.component';
import { CoursesComponent } from './courses/courses.component';
import { MentorongoingtrainingsComponent } from './mentorongoingtrainings/mentorongoingtrainings.component';
import { MentorcompletedtrainingsComponent } from './mentorcompletedtrainings/mentorcompletedtrainings.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingslistComponent } from './trainingslist/trainingslist.component';
import { OngoingtrainingsComponent } from './ongoingtrainings/ongoingtrainings.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    UserlistComponent,
    MentorlistComponent,
    AddcourseComponent,
    CourselistComponent,
    EditcourseComponent,
    MentorsignupComponent,
    MentorloginComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    MentordboardComponent,
    StudentdboardComponent,
    AddtrainingComponent,
    PaymentsComponent,
    ApplytrainingComponent,
    CompletedtrainingsComponent,
    CoursesComponent,
    MentorongoingtrainingsComponent,
    MentorcompletedtrainingsComponent,
    PaymentComponent,
    PaymentlistComponent,
    TrainingsComponent,
    TrainingslistComponent,
    OngoingtrainingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService,AuthGuard,{
    provide :HTTP_INTERCEPTORS,
    useClass :TokenInterceptorService,
    multi:true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
