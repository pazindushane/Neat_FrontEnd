import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { SubContactComponent } from './components/sub-contact/sub-contact.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ContactUsComponent,
    SubContactComponent
  ],
    imports: [
        CommonModule,
        ContactUsRoutingModule,
        FontAwesomeModule,
        FormsModule
    ]
})
export class ContactUsModule { }
