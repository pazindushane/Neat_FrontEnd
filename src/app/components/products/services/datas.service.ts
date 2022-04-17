import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DatasService {
  private itemid = new BehaviorSubject<string>('')

  constructor() { }
  public getitemId(){
    return this.itemid.asObservable();
  }
  public setItemId(val:string){
    return this.itemid.next(val);
  }
}
