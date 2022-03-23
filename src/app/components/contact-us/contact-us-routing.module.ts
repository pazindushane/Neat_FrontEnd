import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';
import {SubContactComponent} from "./components/sub-contact/sub-contact.component";

const routes: Routes = [{ path: '', component: ContactUsComponent, children:[
    {path:'', component:SubContactComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
