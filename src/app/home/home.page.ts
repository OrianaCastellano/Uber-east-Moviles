import { Component, OnInit } from '@angular/core';
import { MultilevelService } from '../multilevel.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private mlevel: MultilevelService) {}

  ngOnInit() {

    this.mlevel.get_movies().subscribe((data: any) => {

      console.log('Ejecutando');
      console.log(data);

    }, Error => {

      console.log(Error);

    });

  }

}
