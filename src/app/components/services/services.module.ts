import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import {ServiceSubComponent} from "./components/service-sub/service-sub.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
// import {MatExpansionModule} from "@angular/material/expansion";


@NgModule({
  declarations: [
    ServicesComponent,
    ServiceSubComponent
  ],
    imports: [
        CommonModule,
        ServicesRoutingModule,
        MatExpansionModule,
        FontAwesomeModule,
        // MatExpansionModule
    ]
})
export class ServicesModule { }
