import { Component, OnInit } from '@angular/core';
import {AboutUsService} from "../../services/about-us.service";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  productImages2! :any[];

  constructor(private aboutssservice:AboutUsService) { }

  ngOnInit(): void {
    this.clientSlider()
  }

  clientSlider(){
    this.productImages2 = this.aboutssservice.getProjectDetails().startStore
  }

  customOptions3: OwlOptions = {
    stagePadding: 10,
    margin:50,
    autoplay: true,
    loop: true  ,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    // navText: ['<', '>'],
    center: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

}
