import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-detalles1',
  templateUrl: './detalles1.component.html',
  styleUrls: ['./detalles1.component.css']
})
export class Detalles1Component implements OnInit {
  navigationExtras: NavigationExtras = {
    state!: {
    // state!: {
      value: null
    }
  };

  articulo: any = null ; //value = null;
  constructor( private router: Router ) {
    const navigation = this.router.getCurrentNavigation();
    this.articulo = navigation?.extras?.state;
   }

  ngOnInit(): void {
  }

  onGoToEdit(): void {
    this.navigationExtras.state!.value = this.articulo;
    this.router.navigate(['editar1'], this.navigationExtras);
    // this.router.navigate(['editar1'], this.navigationExtras);
  }

  onDelete(): void {
    alert('SE HA ELIMINADO');
  }

  onGoBackToList(): void {
    this.router.navigate(['lista1']);
  }

}
