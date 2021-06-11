import { Component, OnInit } from '@angular/core';
import { SellerProfileService } from './sellerprofile.service';
import { UserData } from '../navbar-fields/userdata';

@Component({
  selector: 'app-sellerprofile',
  templateUrl: './sellerprofile.component.html',
  styleUrls: ['./sellerprofile.component.css']
})

export class SellerprofileComponent implements OnInit {
name: string;
emailId: string;
contactNo: string;
userArr: UserData[];
errorMessage: string;
userId: string;


  constructor(private usrService: SellerProfileService) { }

  // obtains the user details from sessionstorage and displays it onto the page
  ngOnInit() {
    this.name = sessionStorage.getItem('name');
    this.emailId = sessionStorage.getItem('emailId');
    this.contactNo = sessionStorage.getItem('contactNo');
    this.userId = sessionStorage.getItem('userId');
    this.usrService.data(this.userId).subscribe(
      (success) => {
        this.userArr = success;
      },
      (failure) => {
        this.errorMessage = failure.error.message;
      }
    );

  }



}
