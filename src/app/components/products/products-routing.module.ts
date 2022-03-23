import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import {CategoriesComponent} from "./components/categories/categories.component";

const routes: Routes = [{ path: '', component: ProductsComponent, children:[
    {path:'', component:CategoriesComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
