import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { SubContactComponent } from './components/sub-contact/sub-contact.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    ContactUsComponent,
    SubContactComponent
  ],
    imports: [
        CommonModule,
        ContactUsRoutingModule,
        FontAwesomeModule
    ]
})
export class ContactUsModule { }
