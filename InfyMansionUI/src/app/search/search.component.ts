import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent  {
  loc = [];
   errorMessage: string;


  constructor(private service:SearchService,private router:Router) { }
location_array = []
  ngOnInit() {

  }

  // Search loction
  search() {
    this.service.search().subscribe(
      (res) => {
        this.loc = res;
        this.location_array=res;
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.loc=[{"area":"Hebbal"},{"area":"Mysore"},{"area":"Gokulam"}];
      }
    )
  }

  //shows result of properties according to location
  show_property(location) {
    this.router.navigate(['/buy', location])
  }


  }
