import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {


  constructor(private router: Router, private dataService: DataService){ }


  ngOnInit(){}

  navigateHome(){
    this.router.navigate([''])
  }

  getUsers(){
    this.dataService.getUsers
  }




  

}
