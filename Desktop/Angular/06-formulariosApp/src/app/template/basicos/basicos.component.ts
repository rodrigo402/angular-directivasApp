import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

@ViewChild('miFormulario') miFormulario!: NgForm;

initForm = {
  producto: 'Producto10',
  precio: 10,
  existencias: 100
}

  constructor() { }

  ngOnInit(): void {
  }
// valida que tenga mas de 3 caracteres y si entro y salio del campo, luego muestra el error
nombreValido () : boolean {
  return this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched;
}
// valida el campo precio, si entro y salio y que sea mayor a 0
precioValido() : boolean {
  return this.miFormulario?.controls.precio?.touched && this.miFormulario?.controls.precio?.value < 0;
}

  guardar(){
    console.log('Poste correcto', this.miFormulario);
     this.miFormulario.resetForm({
      producto: 'algo',
      precio: 0,
      existencias: 0
     })

      
     
   
   
    // //valida el formulario sino no lo manda
    // if(this.miFormulario.controls.precio.value < 0){

    //   console.log('No posteado');
    //   return;
    // }
  }

}
