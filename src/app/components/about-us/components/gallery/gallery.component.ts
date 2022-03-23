import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {AboutUsService} from "../../services/about-us.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('activeSlide', [
      state('active',
        style({
          transform: 'scale(0.9)',
          opacity: 1,
          'border-radius' : '14px',
          'width': '33vw',

        })),
      state('inActive', style({
        transform: 'scale(0.7)',
        opacity: 0.8,
        'border-radius' : '14px',
        'width': '33vw',

      })),
      transition('active => inActive', [
        animate('0.5s')
      ]),
      transition('inActive => active', [
        animate('0.5s')
      ])
    ])
  ]
})
export class GalleryComponent implements OnInit {

  productImages! :any[];


  constructor(private aboutssservice:AboutUsService) { }

  ngOnInit(): void {
    this.gallerySlider()

  }

  gallerySlider(){
    this.productImages = this.aboutssservice.getProjectDetails().startStore
  }



  customOptions2: OwlOptions = {
    stagePadding: 1,
    margin:1,
    autoplay: true,
    loop: true  ,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    center: true,
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }




}
