import { Component, OnInit } from '@angular/core';
import {SubService} from "../../service/sub.service";

@Component({
  selector: 'app-service-sub',
  templateUrl: './service-sub.component.html',
  styleUrls: ['./service-sub.component.scss']
})
export class ServiceSubComponent implements OnInit {

  panelOpenState = false;
  serviceImages! :any[];

  constructor(private subservice:SubService) { }

  ngOnInit(): void {
    this.subSlider()
  }

  subSlider(){
    this.serviceImages = this.subservice.getMemberDetails().memberStore
  }

}
