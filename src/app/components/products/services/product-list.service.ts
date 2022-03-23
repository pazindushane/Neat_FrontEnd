import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() {
  }


  getProjectDetails(type: string) {
    let startStore = [
      {
        data: [
          {
            id: "1",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            name: 'Image_1',
            desc: 'Image_1'
          },
          {
            id: "2",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_2',
            title: 'Image_2'
          },
          {
            id: "3",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            subheading1: 'Image_3',
            title: 'Image_3'
          },
          {
            id: "4",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            subheading1: 'Image_4',
            title: 'Image_4'
          },
          {
            id: "5",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_5',
            title: 'Image_5'
          },
          {
            id: "6",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            alt: 'Image_6',
            title: 'Image_6'
          },
        ],
        type: 'All'
      },
      {
        data: [
          {
            id: "1",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            name: 'Image_1',
            desc: 'Image_1'
          },
          {
            id: "2",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_2',
            title: 'Image_2'
          },
          {
            id: "3",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            subheading1: 'Image_3',
            title: 'Image_3'
          },
          {
            id: "4",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            subheading1: 'Image_4',
            title: 'Image_4'
          },
          {
            id: "5",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_5',
            title: 'Image_5'
          },
          {
            id: "6",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            alt: 'Image_6',
            title: 'Image_6'
          },
        ],
        type: 'Platform'
      },
      {
        data: [
          {
            id: "1",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            name: 'Image_1',
            desc: 'Image_1'
          },
          {
            id: "2",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_2',
            title: 'Image_2'
          },
          {
            id: "3",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            subheading1: 'Image_3',
            title: 'Image_3'
          },
          {
            id: "4",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            subheading1: 'Image_4',
            title: 'Image_4'
          },
          {
            id: "5",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_5',
            title: 'Image_5'
          },
          {
            id: "6",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            alt: 'Image_6',
            title: 'Image_6'
          },
        ],
        type: 'Indicator'
      },
      {
        data: [
          {
            id: "1",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            name: 'Image_1',
            desc: 'Image_1'
          },
          {
            id: "2",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_2',
            title: 'Image_2'
          },
          {
            id: "3",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            subheading1: 'Image_3',
            title: 'Image_3'
          },
          {
            id: "4",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            subheading1: 'Image_4',
            title: 'Image_4'
          },
          {
            id: "5",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_5',
            title: 'Image_5'
          },
          {
            id: "6",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            alt: 'Image_6',
            title: 'Image_6'
          },
        ],
        type: 'Waterproof'
      },
      {
        data: [
          {
            id: "1",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            name: 'Image_1',
            desc: 'Image_1'
          },
          {
            id: "2",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_2',
            title: 'Image_2'
          },
          {
            id: "3",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            subheading1: 'Image_3',
            title: 'Image_3'
          },
          {
            id: "4",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            subheading1: 'Image_4',
            title: 'Image_4'
          },
          {
            id: "5",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_5',
            title: 'Image_5'
          },
          {
            id: "6",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            alt: 'Image_6',
            title: 'Image_6'
          },
        ],
        type: 'Hanging'
      },
      {
        data: [
          {
            id: "1",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            name: 'Image_1',
            desc: 'Image_1'
          },
          {
            id: "2",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_2',
            title: 'Image_2'
          },
          {
            id: "3",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            subheading1: 'Image_3',
            title: 'Image_3'
          },
          {
            id: "4",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            subheading1: 'Image_4',
            title: 'Image_4'
          },
          {
            id: "5",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_5',
            title: 'Image_5'
          },
          {
            id: "6",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            alt: 'Image_6',
            title: 'Image_6'
          },
        ],
        type: 'Weighbridge'
      },
      {
        data: [
          {
            id: "1",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            name: 'Image_1',
            desc: 'Image_1'
          },
          {
            id: "2",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_2',
            title: 'Image_2'
          },
          {
            id: "3",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            subheading1: 'Image_3',
            title: 'Image_3'
          },
          {
            id: "4",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            subheading1: 'Image_4',
            title: 'Image_4'
          },
          {
            id: "5",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_5',
            title: 'Image_5'
          },
          {
            id: "6",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            alt: 'Image_6',
            title: 'Image_6'
          },
        ],
        type: 'App'
      },
      {
        data: [
          {
            id: "1",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            name: 'Image_1',
            desc: 'Image_1'
          },
          {
            id: "2",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_2',
            title: 'Image_2'
          },
          {
            id: "3",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            subheading1: 'Image_3',
            title: 'Image_3'
          },
          {
            id: "4",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            subheading1: 'Image_4',
            title: 'Image_4'
          },
          {
            id: "5",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_5',
            title: 'Image_5'
          },
          {
            id: "6",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            alt: 'Image_6',
            title: 'Image_6'
          },
        ],
        type: 'Counting'
      },
      {
        data: [
          {
            id: "1",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            name: 'Image_1',
            desc: 'Image_1'
          },
          {
            id: "2",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_2',
            title: 'Image_2'
          },
          {
            id: "3",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            subheading1: 'Image_3',
            title: 'Image_3'
          },
          {
            id: "4",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            subheading1: 'Image_4',
            title: 'Image_4'
          },
          {
            id: "5",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_5',
            title: 'Image_5'
          },
          {
            id: "6",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            alt: 'Image_6',
            title: 'Image_6'
          },
        ],
        type: 'Analytical'
      },
      {
        data: [
          {
            id: "1",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            name: 'Image_1',
            desc: 'Image_1'
          },
          {
            id: "2",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_2',
            title: 'Image_2'
          },
          {
            id: "3",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            subheading1: 'Image_3',
            title: 'Image_3'
          },
          {
            id: "4",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
            subheading1: 'Image_4',
            title: 'Image_4'
          },
          {
            id: "5",
            src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
            subheading1: 'Image_5',
            title: 'Image_5'
          },
          {
            id: "6",
            src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
            alt: 'Image_6',
            title: 'Image_6'
          },
        ],
        type: 'Cells'
      }
    ];


    let ar= startStore.filter(el => el.type === type)[0];
    console.log(ar?.data);
    return ar?.data;


  }
}
