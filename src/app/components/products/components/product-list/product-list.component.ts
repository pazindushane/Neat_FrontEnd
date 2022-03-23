import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ProductListService} from "../../services/product-list.service";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [
    trigger('activeSlide', [
      state('active',
        style({
          transform: 'scale(0.9)',
          opacity: 1,
          background: "black",
          'border-radius' : '14px',
          'width': '100%',
          'height': '100%'
        })),
      state('inActive', style({
        transform: 'scale(0.7)',
        opacity: 0.8,
        background: "grey",
        'border-radius' : '14px',
        'width': '100%',
        'height': '100%'
      })),
      transition('active => inActive', [
        animate('0.5s')
      ]),
      transition('inActive => active', [
        animate('0.5s')
      ])
    ]),
    trigger('cardSlide', [
      state('active',
        style({
          transform: 'scale(0.9)',
          opacity: 1,
          background: "rgba(211,36,39,0.6) ",
          'border-radius' : '14px',
          'width': '53vw',
          'height': '60vh',
          'color':'white'
        })
      ),
      state('inActive',
        style({
          transform: 'scale(0.7)',
          opacity: 0.8,
          background: "grey",
          'border-radius' : '14px',
          'width': '53vw',
          'height': '60vh',
          'color':'white'
        })
      )
    ])
  ]
})
export class ProductListComponent implements OnInit, OnChanges {
@Input() selectedCategory!:string;
  productImages! :any[];

  constructor(private plistservice:ProductListService) { }

  ngOnInit(): void {
    // this.productSlider()

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.selectedCategory);
    this.productSlider(this.selectedCategory);
  }



  productSlider(type:string){
    this.productImages = this.plistservice.getProjectDetails(type);
    console.log(this.productImages)
    // this.plistservice.getProjectDetails(type);
  }

  customOptions2: OwlOptions = {
    stagePadding: 65,
    margin:98,
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
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }



}
