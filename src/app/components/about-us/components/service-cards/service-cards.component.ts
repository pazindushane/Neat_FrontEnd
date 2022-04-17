import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-service-cards',
  templateUrl: './service-cards.component.html',
  styleUrls: ['./service-cards.component.scss']
})
export class ServiceCardsComponent implements OnInit {

  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }

}
