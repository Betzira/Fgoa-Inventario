import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Editar1RoutingModule } from './editar1-routing.module';
import { Editar1Component } from './editar1.component';


@NgModule({
  declarations: [Editar1Component],
  imports: [
    CommonModule,
    Editar1RoutingModule
  ]
})
export class Editar1Module { }
