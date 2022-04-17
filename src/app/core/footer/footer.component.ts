import {Component, HostListener, OnInit} from '@angular/core';
import { faLocationArrow, faPhone, faEnvelope, faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private pageYoffset: any;
  private _event: any;

  @HostListener('window:scroll', ['$event']) onScroll(event: any){
    this._event = event;
    this.pageYoffset = window.pageYOffset;
  }

  faLocationArrow= faLocationArrow;
  faPhone=faPhone;
  faEnvelope=faEnvelope;
  faFacebook= faFacebook;
  faInstagram=faInstagram;
  faTwitter=faTwitter;
  faYoutube=faYoutube;
  faArrowCircleUp=faArrowCircleUp;

  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
  }
  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }

}
