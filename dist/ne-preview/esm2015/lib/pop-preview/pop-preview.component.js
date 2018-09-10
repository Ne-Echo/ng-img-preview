/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { IMGLIST } from '../model';
export class PopPreviewComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PopPreviewComponent.decorators = [
    { type: Component, args: [{
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
            },] },
];
/** @nocollapse */
PopPreviewComponent.ctorParameters = () => [];
PopPreviewComponent.propDecorators = {
    imgList: [{ type: Input }],
    snHeight: [{ type: Input }],
    snWidth: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PopPreviewComponent.prototype.imgList;
    /** @type {?} */
    PopPreviewComponent.prototype.snHeight;
    /** @type {?} */
    PopPreviewComponent.prototype.snWidth;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wLXByZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmUtaW1nLXByZXZpZXcvIiwic291cmNlcyI6WyJsaWIvcG9wLXByZXZpZXcvcG9wLXByZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBcURuQyxNQUFNO0lBTUosaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7Z0JBQ0QsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0NSLENBQUM7YUFDSDs7Ozs7c0JBR0UsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSU1HTElTVCB9IGZyb20gJy4uL21vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmUtcG9wLXByZXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgaWQ9XCJnYWxsZXlcIiB2aWV3ZXI+XG4gICAgICA8dWwgY2xhc3M9XCJwaWN0dXJlc1wiPlxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaW1nTGlzdFwiIFtuZ1N0eWxlXT1cInsnd2lkdGgnOiBzbldpZHRoLCAnaGVpZ2h0Jzogc25IZWlnaHR9XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJ7e2l0ZW0udXJsfX1cIiBhbHQ9XCJ7e2l0ZW0uYWx0fX1cIj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICAucGljdHVyZXMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgLnBpY3R1cmVzID4gbGkge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGN1cnNvcjogem9vbS1pbjtcblxuICAgICAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCAqL1xuICAgICAgICBkaXNwbGF5Oi1tcy1mbGV4Ym94O1xuICAgICAgICAtbXMtZmxleC1wYWNrOmNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246Y2VudGVyO1xuXG4gICAgICAgIC8qIEZpcmVmb3ggKi9cbiAgICAgICAgZGlzcGxheTotbW96LWJveDtcbiAgICAgICAgLW1vei1ib3gtcGFjazpjZW50ZXI7XG4gICAgICAgIC1tb3otYm94LWFsaWduOmNlbnRlcjtcblxuICAgICAgICAvKiBTYWZhcmksIE9wZXJhLCBhbmQgQ2hyb21lICovXG4gICAgICAgIGRpc3BsYXk6LXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6Y2VudGVyO1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7XG5cbiAgICB9XG5cbiAgICAucGljdHVyZXMgPiBsaSA+IGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjdXJzb3I6IC13ZWJraXQtem9vbS1pbjtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIFBvcFByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGltZ0xpc3Q6IElNR0xJU1Q7XG4gIEBJbnB1dCgpIHNuSGVpZ2h0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNuV2lkdGg6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==