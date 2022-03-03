import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-lista1',
  templateUrl: './lista1.component.html',
  styleUrls: ['./lista1.component.css']
})
export class Lista1Component implements OnInit {
  navigationExtras: NavigationExtras = {
    state!: {
    // state!: {
      value: null
    }
  };

  fakeData = [
    {
      articulo:'Eterneth',
      marca: 'trupper',
      serie: 'befuf',
      ip: '23.2.3.1',
      nota: 'es una nota'
    },
    {
      articulo:'Cable',
      marca: 'Lenovo',
      serie: 'befuf',
      ip: '23.2.3.1',
      nota: 'es una nota'
    },
    {
      articulo:'Pc',
      marca: 'Dell',
      serie: 'befuf',
      ip: '23.2.3.1',
      nota: 'es una nota'
    },
    {
      articulo:'Disco duro',
      marca: 'Hp',
      serie: '12345',
      ip: '23.2.3.1',
      nota: 'es una nota'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoToEdit(item1: any): void {
    this.navigationExtras.state!.value = item1;
    this.router.navigate(['editar1'], this.navigationExtras);
    // this.router.navigate(['editar1'], this.navigationExtras);
  }

  onGoToSee(item1: any): void {
    this.navigationExtras.state!.value = item1;
    this.router.navigate(['detalles1'], this.navigationExtras);
    // this.router.navigate(['detalles1'], this.navigationExtras);
  }

  onGoToDelete(item1: any): void {
    alert('SE HA ELIMINADO');
  }

}
