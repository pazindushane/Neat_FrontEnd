import {Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ProductListService} from "../../services/product-list.service";
import {OwlOptions} from "ngx-owl-carousel-o";
import {ViewportScroller} from "@angular/common";
import {Subscription} from "rxjs";
import {productDTO} from "../../dto/productDTO";
import {DatasService} from "../../services/datas.service";

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

  // @Output() datas = new EventEmitter<string>();
  private pageYoffset: any;
  private _event: any;
  private allComponentsSub2!: Subscription;
  loading = false;
  loadings=true;


  @HostListener('window:scroll', ['$event']) onScroll(event: any){
    this._event = event;
    this.pageYoffset = window.pageYOffset;
  }

  @Input() selectedCategory!:string;
  productImages! :any[];


  constructor(private plistservice:ProductListService,
              private scroll: ViewportScroller,
              private ddetails:DatasService) { }

  ngOnInit(): void {
    this.productSlider("Cells");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.selectedCategory);
    this.productSlider(this.selectedCategory);
  }

  getSitem(cat: string): void {
    this.ddetails.setItemId(cat)
  }



  productSlider(type:string){
    this.loading = true;
    this.loadings=false;
    this.allComponentsSub2 = this.plistservice.getProjectDetails(type)
      .subscribe(result => {
        console.log(result.content)
        if(result.content != null){
          this.loading = false;
          this.loadings=true;
          this.productImages = result.content;
        }else{
          this.loading = false;
          this.loadings=false;
        }
        // this.paginator.length = result.content.length;

        // this.refreshPageCount();
      }, error => {
        console.log(error);
      });
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
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
