import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  navigateView(){
    this.router.navigate(['view']);
    console.log("navigating to view")
  }

  navigateManage(){
    this.router.navigate(['manage'])
  }

  
}
