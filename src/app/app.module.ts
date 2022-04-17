import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CarouselModule} from "ngx-owl-carousel-o";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgxScrollTopModule } from 'ngx-scrolltop';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CarouselModule,
    NgxScrollTopModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
