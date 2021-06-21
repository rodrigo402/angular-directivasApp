 


import { FormControl } from "@angular/forms";
 // crea propiedades personalizadas para validar los campos y los exporta
 export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
 export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const  noPuedeSerStrider = (control: FormControl) =>{
    const valor = control.value?.trim();
    if( valor == 'strider'){
        return {noStrider: true}
    }
    return null;
    }