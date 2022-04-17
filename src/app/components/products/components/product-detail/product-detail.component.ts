import { Component, OnInit } from '@angular/core';
import {DatasService} from "../../services/datas.service";
import {ProductListService} from "../../services/product-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  private allComponentsSub3!: Subscription;
  private allComponentsSub4!: Subscription;
  productDetails! :any[];
  productDetailsnew! :any[];
  productModels! :any[];
  productImages! :any[];

  constructor(private ddetails:DatasService,
              private plistservice:ProductListService) { }

  ngOnInit(): void {
    this.loadDetails();
  }

  loadDetails(){
    this.ddetails.getitemId().subscribe(res=>{
      this.allComponentsSub3 = this.plistservice.getProductDetails(res)
        .subscribe(result => {
          console.log(result.content[0].product_name)
          console.log(result.content[0].details)
          this.loadImages(result.content[0].product_name);
          this.loadModels(result.content[0].product_name);
          this.productDetailsnew = JSON.parse(result.content[0].details)
          this.productDetails = result.content;
          console.log("detailsnew")
          console.log(this.productDetailsnew)
        }, error => {
          console.log(error);
        });
    })
  }


  private loadImages(product_name: any) {
    this.allComponentsSub4 = this.plistservice.getImageDetails(product_name)
      .subscribe(result => {
        this.productImages = result.content;
        console.log(result)
        console.log("images loaded")
      }, error => {
        console.log(error);
      })
  }

  private loadModels(product_name: any) {
    this.allComponentsSub4 = this.plistservice.getModelDetails(product_name)
      .subscribe(result => {
        this.productModels = result.content;
        console.log(result)
        console.log("Models loaded")
      }, error => {
        console.log(error);
      })
  }
}
