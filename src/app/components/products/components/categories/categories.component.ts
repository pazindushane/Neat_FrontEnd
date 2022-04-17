import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Output() data = new EventEmitter<string>();
  private pageYoffset: any;
  private _event: any;

  constructor(private scroll: ViewportScroller) {
  }

  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
    this._event = event;
    this.pageYoffset = window.pageYOffset;
  }

  ngOnInit(): void {
  }

  clicked(cat: string): void {
    this.data.emit(cat);
  }

  scrollToDown() {
    this.scroll.scrollToPosition([0, 600]);
  }
}
