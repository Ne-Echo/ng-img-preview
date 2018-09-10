import { Component, OnInit, Input } from '@angular/core';

import { IMGLIST } from '../model';

@Component({
  selector: 'ne-pop-preview',
  template: `
    <div id="galley" viewer>
      <ul class="pictures">
        <li *ngFor="let item of imgList" [ngStyle]="{'width': snWidth, 'height': snHeight}">
          <img src="{{item.url}}" alt="{{item.alt}}">
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .pictures {
        margin: 0;
        padding: 0;
        height: 200px;
        list-style: none;
    }

    .pictures > li {
        float: left;
        width: 150px;
        height: 150px;
        margin: 4px;
        border: 1px solid transparent;
        overflow: hidden;
        cursor: zoom-in;

        /* Internet Explorer 10 */
        display:-ms-flexbox;
        -ms-flex-pack:center;
        -ms-flex-align:center;

        /* Firefox */
        display:-moz-box;
        -moz-box-pack:center;
        -moz-box-align:center;

        /* Safari, Opera, and Chrome */
        display:-webkit-box;
        -webkit-box-pack:center;
        -webkit-box-align:center;

    }

    .pictures > li > img {
        width: 100%;
        cursor: -webkit-zoom-in;
    }
  `]
})
export class PopPreviewComponent implements OnInit {

  @Input() imgList: IMGLIST;
  @Input() snHeight: string;
  @Input() snWidth: string;

  constructor() { }

  ngOnInit() {
  }

}
