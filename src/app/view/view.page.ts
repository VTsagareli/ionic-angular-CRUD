import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  page = 0;
  resultsCount = 10;
  totalPage = 10;

  constructor(private router: Router, private http: HttpClient){ }

  data = [];

  ngOnInit(){}

  navigateHome(){
    this.router.navigate([''])
  }

  // loadData(){
  //   this.http.get(`https://randomuser.me/api/?pages=${this.page}&results=${this.resultsCount}`).subscribe(res => {
  //     console.log('res__', res);
  //     this.data = res["results"];
  //   });
  // }
  

}
