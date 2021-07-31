import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MultilevelService } from './multilevel.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  
  constructor(
    public multilevelservice: MultilevelService,
    private router: Router
  ) {}
  ngOnInit(){
this.router.navigateByUrl("/")
  }
}
