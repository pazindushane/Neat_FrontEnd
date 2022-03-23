import { Component, OnInit } from '@angular/core';
import { faLocationArrow, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faLocationArrow = faLocationArrow;
  faPhone = faPhone;
  faFacebook= faFacebook;
  faInstagram=faInstagram;
  faTwitter=faTwitter;
  faYoutube=faYoutube;


  constructor() { }

  ngOnInit(): void {
  }

}
