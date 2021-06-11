import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon';
// import {MatFormFieldModule}  from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatCardModule } from '@angular/material/card';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterService } from './register.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage: string;
  registerForm: FormGroup;
  show: true;
  name: string;
  hide = true;
  emailId: string;
  contactNo: number;
  password: string;


  constructor(private fb: FormBuilder, private mailService: RegisterService, private router: Router,  private _snackBar: MatSnackBar) { }

  ngOnInit() {

    document.getElementsByTagName('div')[0].focus();
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+( )*[a-zA-Z]*( )*[a-zA-Z]+$/)]],
      emailId: ['', [Validators.required, Validators.pattern(/^[a-z]+[0-9]*@[a-z]+\.([a-z]{2,3})(\.){0,1}([a-z]{0,2})$/)]],
      contactNo: ['', [Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{7,20}$/)]]
    });
  }
  // registers a new user and correspondingly data is added to database
  register() {
    this.mailService.register(this.registerForm.value).subscribe(
      (success) => {
        this.openSnackBar('Registered successfully. Please Login to continue', 'OK');
        this.router.navigate(['/home'])
        this.errorMessage = null;
      },
      (failure) => {
        this.errorMessage = failure.error.message;
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: ['snackbar-position'],
      horizontalPosition: "center"
    });
  }

      navigateLoginPage(){   
        this.router.navigate(['/login']);
      }

}


