import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css'],
})
export class FormDataComponent implements OnInit {
  forma: FormGroup;
  user: UsuarioModel;
  usuario: object = {
    nombreCompleto: {
      nombre: 'daniel',
      apellido: 'prieto',
    },
    correo: 'daniel@gmail.com',
    pasatiempos: ['dormir', 'comer', 'jugar warzone'],
  };

  parrent: string;
  constructor() {
    this.parrent = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$';
    this.forma = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
        apellido: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
      }),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern(this.parrent),
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      password2: new FormControl( ),
      pasaTiempos: new FormArray([
        new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
      ]),
    });

    this.forma.controls.password2.setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);
  }

  ngOnInit(): void {}

    noIgual(control: FormControl): {[s: string]: boolean} {
      const FORMA: any  = this;
      console.log();
      if ( control.value !== FORMA.controls.password.value ){
        return {noigual: true};
      }
      return null;
  }


  agregarPasaTiempos() {
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    (<FormArray> this.forma.controls.pasaTiempos).push(
      new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ])
    );
  }
  getControls() {
    return (this.forma.get('pasaTiempos') as FormArray).controls;
  }

  guardarCambios() {
    this.user = this.forma.value;
    console.log(this.user);

    console.log(this.forma);
  }
}
