import { Component, OnInit } from '@angular/core';

import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {
  usuario: Usuario = {
    nombre: null,
    apellido: null,
    phone: null,
    corre: null,
    contrasena: null
  };
  validacion: boolean;
  pristine: boolean;
  constructor() { }
  ngOnInit(): void {
  }


  guardar(value: NgForm){
    console.log('formulario postiado');
    console.log('NgForm ', value);
    console.log('valor', value.value);
    this.pristine = value.pristine;
    setTimeout(() => {
    this.pristine = false;
    }, 1500);

  }

  limpiar(){
    this.usuario = {
      nombre: '',
      apellido: '',
      phone: '',
      corre: '',
      contrasena: ''
    };
    this.validacion = false;
  }

}

interface Usuario {
  nombre: string;
  apellido: string;
  phone: string;
  corre?: string;
  contrasena?: string;
}

