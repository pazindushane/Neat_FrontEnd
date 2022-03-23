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
          name: 'Photos1',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/MgSkSX6/user3.jpg'
        },
        {
          name: 'Photos2',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/9bPbTZz/user2.jpg'
        },
        {
          name: 'Photos3',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/92nY6WT/user1.jpg'
        },
        {
          name: 'Photos4',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/MgSkSX6/user3.jpg'
        },
        {
          name: 'Photos5',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/9bPbTZz/user2.jpg'
        },
        {
          name: 'Photos6',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/92nY6WT/user1.jpg'
        }
      ]
    })
  }
}
