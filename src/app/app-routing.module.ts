import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailComponent} from "./components/products/components/product-detail/product-detail.component";

const routes: Routes = [{path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'aboutUs', loadChildren: () => import('./components/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'services', loadChildren: () => import('./components/services/services.module').then(m => m.ServicesModule) },
  { path: 'products', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) },
  { path: 'contactUs', loadChildren: () => import('./components/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  {path:'details', component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
