import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private _snackBar: MatSnackBar,private fb: FormBuilder , private router: Router , private loginService: LoginService , private app: AppComponent ) { 
      sessionStorage.setItem("PreviousUrl",sessionStorage.getItem("CurrentUrl"));
      sessionStorage.setItem("CurrentUrl",this.router.url);

  }

  loginForm: FormGroup;
  errorMessage: string;
  registerPage = false;
  contactNo = '';
  contactEmail = '';
  emailId = '';
  hide = true;
  key = false;
  show = true;
  searchPage = false;






  ngOnInit(): void {

    this.loginForm = this.fb.group({
      emailId:['', [Validators.required , Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*|[6-9][0-9]{9}$/)]],
      userPassword:['', [Validators.required , Validators.pattern(/^[a-zA-Z0-9!@#$%^&*_]{8,20}$/)]]

    });
  }


  // login to user profile
  login(){
    this.validateEmailAddress(this.loginForm.value.emailId)

    this.loginService.login(this.loginForm.value).subscribe(
      (response) =>{
        sessionStorage.setItem("contactNo", response.contactNo);
        sessionStorage.setItem("userId", response.userId);
        sessionStorage.setItem("emailId", response.emailId);
        sessionStorage.setItem("name", response.name);
        this.openSnackBar('Logged in successfully', 'Ok')
        if(this.loginForm.value.emailId == "admin@gmail.com"){
          this.router.navigate(['/admin'])
        }else{
          this.router.navigate(['/search'])
        }
        this.errorMessage = null;
        this.app.reload();
      },
      (error) => {
        this.errorMessage = error.error.message;
        sessionStorage.clear();
      }
    );
  }

  //to open snack bar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: ['snackbar-position'],
      horizontalPosition: "center"

    });
  }


  validateEmailAddress(str){
    const contact = /^[6-9][0-9]{9}$/;
    if (str.match(contact)){
      return this.loginForm.value.contactNo = str;
    }else{
      return this.loginForm.value.emailId = str
    }
  }


  onSubmit(){
    console.log(this.loginForm.value);
  }

  navigaterRegisterPage(){
    this.registerPage = true;
    this.router.navigate(['/register']);
  }

  navigateSearchPage(){
    this.searchPage = true;
    this.router.navigate(['/search']);

  }



}
