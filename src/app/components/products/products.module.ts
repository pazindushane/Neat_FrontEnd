import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ProductsComponent,
    CategoriesComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        CarouselModule,
        HttpClientModule
    ]
})
export class ProductsModule { }
