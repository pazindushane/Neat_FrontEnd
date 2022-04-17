import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor() { }

  getProjectDetails(){
    return ({
      startStore : [
        {
          id:"1",
          src:'https://i.ibb.co/n1pwrtk/solis-01-01.png',
          subheading1:'Image_1',
          title:'Image_1'
        },
        {
          id:"2",
          src:'https://i.ibb.co/F7YpyYd/lgo3-01-01.png',
          subheading1:'Image_2',
          title:'Image_2'
        },
        {
          id:"3",
          src:'https://i.ibb.co/n6qYkWP/logo2-01-01.png',
          subheading1:'Image_3',
          title:'Image_3'
        },
        {
          id:"4",
          src:'https://i.ibb.co/n1pwrtk/solis-01-01.png',
          subheading1:'Image_4',
          title:'Image_4'
        },
        {
          id:"5",
          src:'https://i.ibb.co/F7YpyYd/lgo3-01-01.png',
          subheading1:'Image_5',
          title:'Image_5'
        },
        {
          id:"6",
          src:'https://i.ibb.co/n6qYkWP/logo2-01-01.png',
          alt:'Image_6',
          title:'Image_6'
        },
      ]
    })
  }

  getGalleryDetails(){
    return ({
      startStore : [
        {
          id:"1",
          src:'https://i.ibb.co/nkXkfRr/Gallery2.png',
          subheading1:'Image_1',
          title:'Image_1'
        },
        {
          id:"2",
          src:'https://i.ibb.co/0YBXMMp/Gallery1-1.png',
          subheading1:'Image_2',
          title:'Image_2'
        },
        {
          id:"3",
          src:'https://i.ibb.co/njt1CDd/Gallery3-1.png',
          subheading1:'Image_3',
          title:'Image_3'
        },
        {
          id:"4",
          src:'https://i.ibb.co/nkXkfRr/Gallery2.png',
          subheading1:'Image_4',
          title:'Image_4'
        },
        {
          id:"5",
          src:'https://i.ibb.co/0YBXMMp/Gallery1-1.png',
          subheading1:'Image_5',
          title:'Image_5'
        },
        {
          id:"6",
          src:'https://i.ibb.co/njt1CDd/Gallery3-1.png',
          alt:'Image_6',
          title:'Image_6'
        },
      ]
    })
  }
}
