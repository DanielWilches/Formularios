import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormDataComponent } from './pages/form-data/form-data.component';
import { FormTemplateComponent } from './pages/form-template/form-template.component';


const routes: Routes = [
  { path: 'Data', component: FormDataComponent },
  { path: 'Template', component: FormTemplateComponent },
  {path: '**', redirectTo: 'Template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
