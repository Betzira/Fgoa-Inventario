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
