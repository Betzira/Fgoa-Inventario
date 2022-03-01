import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar1',
  templateUrl: './editar1.component.html',
  styleUrls: ['./editar1.component.css']
})
export class Editar1Component implements OnInit {

  value ; //value = null;
  constructor( private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
   }

  ngOnInit(): void {
  }

}
