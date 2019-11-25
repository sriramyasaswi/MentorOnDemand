import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _signup = "https://localhost:44323/authservice/register"
private _signupmentor = "https://localhost:44323/authservice/register"
private _loginUser = "https://localhost:44323/authservice/login"
private _loginAdmin = "https://localhost:44323/authservice/login"
private _loginMentor = "https://localhost:44323/authservice/login"


private _getUserListUrl = "https://localhost:44323/adminservice/studentlist";
  private _getMentorListUrl = "https://localhost:44323/adminservice/mentorlist"
  private _addCourseUrl = "https://localhost:44323/adminservice/addcourse";
  private _deleteCourseUrl = "https://localhost:44323/adminservice/"; 
  private _getCourseListUrl = "https://localhost:44323/adminservice/courselist";
  private _EditCourseUrl = "https://localhost:44323/adminservice";
  private _getCourseDetailsUrl = "https://localhost:44323/adminservice";
  private _blockedUrl = "https://localhost:44323/adminservice/blockunblock";
  private _addTrainingUrl = "https://localhost:44323/api/mentor/addTraining";
  private _getPaymentListUrl = "https://localhost:44323/studentservice/paymentlist";
  private _getTrainingListUrl = "https://localhost:44323/studentservice/traininglist";
  private _updateTrainingProgressUrl = "https://localhost:44323/mentorservice/updateProgress"
  private _getTrainingByIdUrl = "https://localhost:44323/mentorservice/gettraining";
  private _MentorOngoingUrl = "https://localhost:44323/mentorservice/mentorongng"
  private _MentorComptdUrl = "https://localhost:44323/mentorservice/mentorcomp"
  private _getCourseByNameUrl = "https://localhost:44323/adminservice";
  private _StudentUpcomingUrl = "https://localhost:44323/studentservice/studupcom"
  private _StudentComptdUrl = "https://localhost:44323/studentservice/studcomp"
  private _StudentOngoingUrl = "https://localhost:44323/studentservice/studongng"
  private _addPaymentUrl =  "https://localhost:44323/studentservice/addpayment"
  private _applyTrainingUrl =  "https://localhost:44323/studentservice/applytraining"
  private tempdata : any;
  constructor(private http : HttpClient,
              private _router: Router) { }
  registerUser(user){
    return this.http.post<any>(this._signup,user)
  }
  registerMentor(mentor){
    return this.http.post<any>(this._signupmentor,mentor)
  }
  loginUser(user){
    return this.http.post<any>(this._loginUser,user)
  }
  loginAdmin(admin){
    return this.http.post<any>(this._loginAdmin,admin)
  }
  loginMentor(mentor){
    return this.http.post<any>(this._loginMentor,mentor)
  }
loggedin(){
  return !!localStorage.getItem('token')
}
getToken(){
  return localStorage.getItem('token')
}
logoutUser(){
  localStorage.removeItem('token'),
  localStorage.removeItem('id'),
  localStorage.removeItem('email')
  localStorage.removeItem('firstname'),
  localStorage.removeItem('lastname')
    this._router.navigate(['/home'])
}

setTempdata(tmp)
  {
    this.tempdata = tmp;
    
  }

  getTempdata()
  {
    return this.tempdata
  }

  studentList(){
    return this.http.get<any>(this._getUserListUrl)
  }
  
  mentorList(){
    return this.http.get<any>(this._getMentorListUrl)
  }

  courseList(){
    return this.http.get<any>(this._getCourseListUrl)
  }

  addCourse(course){
    return this.http.post<any>(this._addCourseUrl,course)
  }

  deleteCourse(id){
    return this.http.delete<any>(this._deleteCourseUrl+id)
  }

  
  EditCourse(id,course) {
    return this.http.put<any>(this._EditCourseUrl+"/"+id, course)
  }
  getCourse(id)
  {
    return this.http.get<any>(this._getCourseDetailsUrl+"/"+id)
  }

  updateStatus(id)
  {
    return this.http.get<any>(this._blockedUrl+"/"+id)
  }

  addTraining(details){
    return this.http.post<any>(this._addTrainingUrl,details)
  }
  paymentsList() {
    return this.http.get<any>(this._getPaymentListUrl)
  }
  TrainingList() {
    return this.http.get<any>(this._getTrainingListUrl)
  }
  updateProgress(id,value)
  {
    console.log(value)  
    return this.http.get<any>(this._updateTrainingProgressUrl+"/"+id+'/'+value)
  }
  getTrainingById(id)
  {
    return this.http.get<any>(this._getTrainingByIdUrl+"/"+id)
  }
  getMentorOngoingTrainings(id)
  {
    return this.http.get<any>(this._MentorOngoingUrl+"/"+id)
  }
  getMentorComptdTrainings(id)
  {
    return this.http.get<any>(this._MentorComptdUrl+"/"+id)
  }
  getCourseById(id)
  {
    return this.http.get<any>(this._getCourseByNameUrl+"/"+id)
  }
  getStudentUpcomngTrainings()
  {
    return this.http.get<any>(this._StudentUpcomingUrl)
  }
  getStudentComptdTrainings(id)
  {
    return this.http.get<any>(this._StudentComptdUrl+"/"+id)
  }
  getStudentOngoingTrainings(id)
  {
    return this.http.get<any>(this._StudentOngoingUrl+"/"+id)
  }
  addPayment(value1)
  {
    return this.http.post<any>(this._addPaymentUrl,value1)
  }

  applyTraining(value2)
  {
    return this.http.put<any>(this._applyTrainingUrl,value2)
  }
}
