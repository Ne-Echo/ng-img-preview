import { Component } from '@angular/core';

import { IMGLIST } from '../../projects/ne-preview/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  snHeight: string = '300px';

  imgList: IMGLIST[] = [
    {
      dataOriginal: '../assets/images/1.jpg',
      url: '../assets/images/1.jpg',
      alt: '../assets/images/1.jpg'
    },
    {
      dataOriginal: '../assets/images/2.jpg',
      url: '../assets/images/2.jpg',
      alt: '../assets/images/2.jpg'
    },
    {
      dataOriginal: '../assets/images/3.jpg',
      url: '../assets/images/3.jpg',
      alt: '../assets/images/3.jpg'
    },
    {
      dataOriginal: '../assets/images/4.jpg',
      url: '../assets/images/4.jpg',
      alt: '../assets/images/4.jpg'
    }
  ];

  onPageBtnClick(index) {
    console.log('onPageBtnClick==', index);
  }
}
