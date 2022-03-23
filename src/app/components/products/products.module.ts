import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {CarouselModule} from "ngx-owl-carousel-o";


@NgModule({
  declarations: [
    ProductsComponent,
    CategoriesComponent,
    ProductListComponent
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        CarouselModule
    ]
})
export class ProductsModule { }
