import { Component, OnInit } from '@angular/core';
import { faMedal, faHandPointUp, faHandshake, faHeadset, faWrench, faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-servicecate',
  templateUrl: './servicecate.component.html',
  styleUrls: ['./servicecate.component.scss']
})
export class ServicecateComponent implements OnInit {

  faMedal = faMedal;
  faHandPointUp= faHandPointUp;
  faHandshake=faHandshake;
  faHeadset=faHeadset;
  faWrench=faWrench;
  faTruck=faTruck;

  constructor() {
  }

  ngOnInit(): void {
  }

}
