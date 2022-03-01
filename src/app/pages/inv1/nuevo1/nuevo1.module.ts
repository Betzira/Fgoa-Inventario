import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Nuevo1RoutingModule } from './nuevo1-routing.module';
import { Nuevo1Component } from './nuevo1.component';


@NgModule({
  declarations: [Nuevo1Component],
  imports: [
    CommonModule,
    Nuevo1RoutingModule
  ]
})
export class Nuevo1Module { }
