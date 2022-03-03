import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar1',
  templateUrl: './editar1.component.html',
  styleUrls: ['./editar1.component.css']
})
export class Editar1Component implements OnInit {

  value ; //value = null;
  lista1Form! : FormGroup;
  constructor( private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
   }

  

  ngOnInit(): void {
    this.initForm();
  }

  

  private initForm(): void {
    this.lista1Form = this.fb.group(
      {
      articulo: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      serie: ['', [Validators.required]],
      ip: ['', [Validators.required]],
      nota: ['', [Validators.required]]
      }
    );
  }

  onSave(): any {
    console.log('Cambios guardados', this.lista1Form.value);
  }

}
