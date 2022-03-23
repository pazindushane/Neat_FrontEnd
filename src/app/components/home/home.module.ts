import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StartSectionComponent } from './components/start-section/start-section.component';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ProductsSectionComponent } from './components/products-section/products-section.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    HomeComponent,
    StartSectionComponent,
    AboutUsSectionComponent,
    ServicesSectionComponent,
    ProductsSectionComponent
  ],
  exports: [
    StartSectionComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CarouselModule,
        FontAwesomeModule
    ]
})
export class HomeModule { }
