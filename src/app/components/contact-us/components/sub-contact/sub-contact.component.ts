import { Component, OnInit } from '@angular/core';
import { faHeadset, faPhone, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {ConnectionServiceService} from "../../services/connection-service.service";
import {Email} from "../../dto/email";


@Component({
  selector: 'app-sub-contact',
  templateUrl: './sub-contact.component.html',
  styleUrls: ['./sub-contact.component.scss']
})
export class SubContactComponent implements OnInit {

  userModel = new Email("","",0 ,"")

  faHeadset=faHeadset;
  faPhone=faPhone;
  faUser=faUser;
  faEnvelope=faEnvelope;

  constructor(private connectionService: ConnectionServiceService) {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.connectionService.sendMessage(this.userModel)
      .subscribe(
        data => console.log('success!', data),
        error => console.error('error!', error)
      )
  }

}
