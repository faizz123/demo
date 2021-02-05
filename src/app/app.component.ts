import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router:Router)
  {

  }
  ngOnInit()
  {

  }

  login()
  {
    this.router.navigateByUrl('login');
  }
  logout()
  {
    this.router.navigateByUrl('logout');
  }

 
}
