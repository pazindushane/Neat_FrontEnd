import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Output() data=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  clicked(cat:string):void{
    this.data.emit(cat);
}
}
