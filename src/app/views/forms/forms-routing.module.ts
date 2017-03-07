import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { FormValidatorComponent } from "./form-validator/form-validator.component";
import { CustomValidatorComponent } from "./custom-validator/custom-validator.component";

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'template',
    pathMatch: 'full'
  },
  {
    path: 'template',
    component: TemplateDrivenComponent
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent
  }, {
    path: 'valid',
    component: FormValidatorComponent
  }, {
    path: 'cust-valid',
    component: CustomValidatorComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FormsRoutingModule { }
