import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Articulo } from '../../models/articulo1.interface';

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.css']
})
export class ArticuloFormComponent implements OnInit {

  value: Articulo ; //value = null;
  lista1Form! : FormGroup;

  constructor( private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state?.value;
    this.initForm();
   }

  

  ngOnInit(): void {

    if (typeof this.value == 'undefined'){
      this.router.navigate(['nuevo1']);
    } else {
      this.lista1Form.patchValue(this.value);
    }

  }

  private initForm(): void {
    this.lista1Form = this.fb.group(
      {
      articulo: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      serie: ['', [Validators.required]],
      ip: ['', [Validators.required]],
      mac: ['', [Validators.required]],
      accesorios: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]]
      }
    );
  }

  onSave(): any {
    console.log('Cambios guardados', this.lista1Form.value);
  }

  onGoBackToList(): void {
    this.router.navigate(['lista1']);
  }

}

