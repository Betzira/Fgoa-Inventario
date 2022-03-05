import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ArticuloFormComponent } from './shared/components/articulo-form/articulo-form.component';
import { ArticuloFormModule } from './shared/components/articulo-form/articulo-form.module';

@NgModule({
  declarations: [
    AppComponent,
    // ArticuloFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticuloFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
