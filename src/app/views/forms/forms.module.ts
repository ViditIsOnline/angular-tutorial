import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormValidatorComponent } from './form-validator/form-validator.component';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsRoutingModule
  ],
  declarations: [HomeComponent, TemplateDrivenComponent, ReactiveFormComponent, FormValidatorComponent, CustomValidatorComponent]
})
export class FormsModule { }
