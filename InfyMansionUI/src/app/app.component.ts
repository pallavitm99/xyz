import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'InfyMansionUI';
  isShown = false;
  module = true;
  uLoggedIn;
  uname
  
  constructor(private router:Router, private _snackBar: MatSnackBar){}
  ngOnInit(){
    this.isShown = false;
    this.uname = sessionStorage.getItem('name');
    if (this.uname){
       this.uLoggedIn = true;
    }
    else{
      this.uLoggedIn = false;
    }
  }


  login(){
   this.uname = sessionStorage.getItem('name');
  }

  reload(){
    this.ngOnInit();
  }
  openSnackBar(message:string,action:string){
    this._snackBar.open(message,action,{
      duration:5000,
      verticalPosition:'top',
      panelClass:['snackbar-position'],
      horizontalPosition:"center"
    });
  }
  OnActivate(event){

  }
  signout(){
    sessionStorage.clear()
    this.ngOnInit();
    this.openSnackBar('Logged out successfully','OK')
    this.router.navigate(['/login'])
  }
  
  viewSnackprofile(){
    this.openSnackBar('Please login to view Profile','Ok');
    console.log("hi");

  }
  viewSnackwishlist(){
    this.openSnackBar('Please login to view  wishlist page','Ok');

  }
  viewSnacksell(){
    this.openSnackBar('Please login to view Page','Ok');

  }

  navigateSell(){
    this.router.navigate(['/sell'])
  }

 }

















