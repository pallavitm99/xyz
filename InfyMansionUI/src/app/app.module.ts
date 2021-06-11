import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerComponent } from './navbar-fields/buyer/buyer.component';
import { LoginComponent } from './navbar-fields/login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonToggleModule} from '@angular/material/button-toggle';
import{MatToolbarModule} from '@angular/material/toolbar';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SellerprofileComponent } from './sellerprofile/sellerprofile.component';
import { MaterialModule } from './material/material.module';
import{MatMenuModule} from '@angular/material/menu';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { SellComponent } from './navbar-fields/sell/sell.component';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    BuyerComponent,
    LoginComponent,
    //RegisterFormComponent,
     RegisterComponent,
     SellComponent,
     SellerprofileComponent,
     AdminComponent,
     SearchComponent,
     UpdateProfileComponent,
     WishlistComponent
    
    
    
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonToggleModule,
    NoopAnimationsModule,
    HttpClientModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
