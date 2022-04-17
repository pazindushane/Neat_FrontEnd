import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  constructor() { }
  getMemberDetails(){
    return ({
      memberStore : [
        {
          name: 'All Scale calibration process',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/MgSkSX6/user3.jpg'
        },
        {
          name: 'All Scale repair & Performance report',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/9bPbTZz/user2.jpg'
        },
        {
          name: 'All Scale repair',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/92nY6WT/user1.jpg'
        },
        {
          name: 'Distributing All Kinds of brand new scales',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/MgSkSX6/user3.jpg'
        }
      ]
    })
  }
}
