import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent} from './register/register.component';
import { LoginComponent} from './navbar-fields/login/login.component';
import {BuyerComponent } from './navbar-fields/buyer/buyer.component'
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SellComponent } from './navbar-fields/sell/sell.component';
import { SellerprofileComponent } from './sellerprofile/sellerprofile.component';
import { GuardService } from './guard.service';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
 import { GuardadminService } from './guardadmin.service';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [{
  path: 'register',component: RegisterComponent},
  {path: 'login',component: LoginComponent},
  {path: 'buy',component: BuyerComponent},
  {path:'search', component:SearchComponent},
  {path:"buy/:v", component:BuyerComponent},
  {path:"buy/:location",component:BuyerComponent},
  {path:"wishlist" ,component:WishlistComponent,canActivate:[GuardService]},
  {path:"sell",component:SellComponent ,canActivate:[GuardService]},
  {path:"profile", component:SellerprofileComponent },
   {path:"admin", component:AdminComponent ,canActivate:[GuardadminService]},
   {path:"update" ,component:UpdateProfileComponent, canActivate:[GuardService]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
