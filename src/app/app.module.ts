import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTemplateComponent } from './pages/form-template/form-template.component';
import { FormDataComponent } from './pages/form-data/form-data.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    FormDataComponent,
    NavbarComponent,
    CapitalizarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
