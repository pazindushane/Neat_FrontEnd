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
          src: 'https://i.ibb.co/D9RjSJL/Homepage-Banner1-1.jpg',
          alt: 'Image_1',
          title: 'The total weighing solutions provider under one roof'
        },
        {
          id: "2",
          src: 'https://i.ibb.co/Kj02n71/Homepage-Banner2-1.jpg',
          alt: 'Image_2',
          title: 'A big range of reliable Weighing and Counting scales for shops and supermarkets.'
        },
        {
          id: "3",
          src: 'https://i.ibb.co/9WsjsfL/Homepage-Banner3-1.jpg',
          alt: 'Image_3',
          title: 'Expert in medium and large scale Weighbridge provider and installer in Sri Lanka.'
        },
        {
          id: "4",
          src: 'https://i.ibb.co/v39D4bg/Homepage-Banner4-1.jpg',
          alt: 'Image_3',
          title: 'Calibrations, Testing, Repairing, Maintenance and all other services! '
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
          title:''
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
