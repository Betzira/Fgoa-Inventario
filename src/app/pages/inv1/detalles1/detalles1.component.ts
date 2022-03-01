import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles1',
  templateUrl: './detalles1.component.html',
  styleUrls: ['./detalles1.component.css']
})
export class Detalles1Component implements OnInit {

  value ; //value = null;
  constructor( private router: Router ) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
   }

  ngOnInit(): void {
  }

}
