import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { StartSectionComponent } from './components/start-section/start-section.component';
import { ServiceCardsComponent } from './components/service-cards/service-cards.component';
import { ServicecateComponent } from './components/servicecate/servicecate.component';
import { ClientsComponent } from './components/clients/clients.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CarouselModule} from "ngx-owl-carousel-o";


@NgModule({
  declarations: [
    AboutUsComponent,
    StartSectionComponent,
    ServiceCardsComponent,
    ServicecateComponent,
    ClientsComponent,
    GalleryComponent
  ],
    imports: [
        CommonModule,
        AboutUsRoutingModule,
        FontAwesomeModule,
        CarouselModule
    ]
})
export class AboutUsModule { }
