import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StartSectionService {

  constructor() { }

  getStartDetails(){
    return ({
      slidesStore: [
        {
          id: "1",
          src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
          alt: 'Image_1',
          title: 'Image_1'
        },
        {
          id: "2",
          src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
          alt: 'Image_2',
          title: 'Image_3'
        },
        {
          id: "3",
          src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
          alt: 'Image_3',
          title: 'Image_3'
        },
      ]
    })

  }

  getProjectDetails(){
    return ({
      startStore : [
        {
          id:"1",
          src:'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
          subheading1:'All Scale',
          title:'calibration process'
        },
        {
          id:"2",
          src:'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
          subheading1:'All Scale repair',
          title:'Performance report'
        },
        {
          id:"3",
          src:'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
          subheading1:'All Scale repair',
          title:'Image_3'
        },
        {
          id:"4",
          src:'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
          subheading1:'Importing &',
          title:'Distributing All Kinds ',
          subhead:' of brand new scales'
        }
      ]
    })
  }

  getProductDetails(){
    return ({
      startStore : [
        {
          id:"1",
          src:'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
          subheading1:'Pos Machines',
          title:'Digital POS Machines',
        },
        {
          id:"2",
          src:'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
          subheading1:'Pos Machines',
          title:'Digital POS Machines',
        },
        {
          id:"3",
          src:'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
          subheading1:'Pos Machines',
          title:'Digital POS Machines',
        },
        {
          id:"4",
          src:'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
          subheading1:'Pos Machines',
          title:'Digital POS Machines',
        }
      ]
    })
  }
}
