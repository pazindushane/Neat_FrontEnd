import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import {ServiceSubComponent} from "./components/service-sub/service-sub.component";

const routes: Routes = [{ path: '', component: ServicesComponent, children:[
    {path:'', component:ServiceSubComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
