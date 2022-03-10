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
      nombre: 'sistemasfgoa',
      serie: 'befuf',
      ip: '23.2.3.1',
      mac: 'oo:cc:oo',
      accesorios: 'mouse',
      ubicacion: 'sistemas0'
    },
    {
      articulo:'Cable',
      marca: 'Lenovo',
      nombre: 'sistemasfgoa',
      serie: 'befuf',
      ip: '23.2.3.1',
      mac: 'oo:cc:oo1',
      accesorios: 'mouse1',
      ubicacion: 'sistemas1'
    },
    {
      articulo:'Pc',
      marca: 'Dell',
      nombre: 'sistemasfgoa',
      serie: 'befuf',
      ip: '23.2.3.1',
      mac: 'oo:cc:oo2',
      accesorios: 'mouse2',
      ubicacion: 'sistemas2'
    },
    {
      articulo:'Disco duro',
      marca: 'Hp',
      nombre: 'sistemasfgoa',
      serie: '12345',
      ip: '23.2.3.1',
      mac: 'oo:cc:oo3',
      accesorios: 'mouse3',
      ubicacion: 'sistemas3'
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
    alert('Artículo eliminado');
  }

}
