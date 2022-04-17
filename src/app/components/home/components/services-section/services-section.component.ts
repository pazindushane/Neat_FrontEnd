import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {StartSectionService} from "../../services/start-section.service";
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
  animations: [
    trigger('activeSlide', [
      state('active',
        style({
        transform: 'scale(0.9)',
        opacity: 1,
        background: "#000098",
        'border-radius' : '14px',
        'cursor': 'pointer'
      })),
      state('inActive', style({
        transform: 'scale(0.7)',
        opacity: 0.8,
        background: "#121212",
        'border-radius' : '14px',
        'cursor': 'pointer'
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
          background: "#126AFE",
          'border-radius' : '100%',
          'width': '10vw',
          'height': '20vh',
          'color':'white'
        })
        ),
      state('inActive',
        style({
          transform: 'scale(0.7)',
          opacity: 0.8,
          background: "#222222",
          'border-radius' : '100%',
          'width': '10vw',
          'height': '20vh',
          'color':'#126AFE'
        })
      )
    ])
  ]
})
export class ServicesSectionComponent implements OnInit {

  projectImages! :any[];
  faBalanceScale=faBalanceScale;

  constructor(private Projectservice:StartSectionService, private scroll: ViewportScroller) { }

  ngOnInit(): void {
    this.projectSlider()
  }

  projectSlider(){
    this.projectImages = this.Projectservice.getProjectDetails().startStore
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

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }

}
