import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.scss']
})
export class AboutUsSectionComponent implements OnInit {

  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }


}
