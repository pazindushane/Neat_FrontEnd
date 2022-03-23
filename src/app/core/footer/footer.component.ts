import { Component, OnInit } from '@angular/core';
import { faLocationArrow, faPhone, faEnvelope, faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faLocationArrow= faLocationArrow;
  faPhone=faPhone;
  faEnvelope=faEnvelope;
  faFacebook= faFacebook;
  faInstagram=faInstagram;
  faTwitter=faTwitter;
  faYoutube=faYoutube;
  faArrowCircleUp=faArrowCircleUp;

  constructor() { }

  ngOnInit(): void {
  }

}
