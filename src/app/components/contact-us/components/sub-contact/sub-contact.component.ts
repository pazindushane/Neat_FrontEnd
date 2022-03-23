import { Component, OnInit } from '@angular/core';
import { faHeadset, faPhone, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sub-contact',
  templateUrl: './sub-contact.component.html',
  styleUrls: ['./sub-contact.component.scss']
})
export class SubContactComponent implements OnInit {

  faHeadset=faHeadset;
  faPhone=faPhone;
  faUser=faUser;
  faEnvelope=faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
