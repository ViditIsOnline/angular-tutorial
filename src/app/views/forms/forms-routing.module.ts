import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";

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
  }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FormsRoutingModule { }
