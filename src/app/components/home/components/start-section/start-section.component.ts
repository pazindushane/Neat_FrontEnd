import { Component, OnInit } from '@angular/core';
import {StartSectionService} from "../../services/start-section.service";
import {OwlOptions} from "ngx-owl-carousel-o";
import { faTrain } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-start-section',
  templateUrl: './start-section.component.html',
  styleUrls: ['./start-section.component.scss']
})
export class StartSectionComponent implements OnInit {

  faTrain=faTrain;

  sliderImages!: any[];

  constructor(private startsectionservice:StartSectionService) { }

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider(){
    this.sliderImages = this.startsectionservice.getStartDetails().slidesStore
    for(var i = 0;i<this.sliderImages.length;i++) {
      console.log(this.sliderImages[i])
    }
  }

  slidesStore = [
    {
      id:"1",
      src:'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
      alt:'Image_1',
      title:'Image_1'
    },
    {
      id:"2",
      src:'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
      alt:'Image_2',
      title:'Image_3'
    },
    {
      id:"3",
      src:'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
      alt:'Image_3',
      title:'Image_3'
    },
  ]

  advertisementsOptions: OwlOptions = {
    autoplay: true,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

}
