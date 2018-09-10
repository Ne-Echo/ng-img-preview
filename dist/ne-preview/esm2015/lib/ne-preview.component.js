/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { IMGLIST } from './ne-preview.model';
export class NePreviewComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NePreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'ne-ne-preview',
                template: `
    <div id="galley" viewer>
      <ul class="pictures">
        <li *ngFor="let item of imgList">
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
        margin: 0 -1px -1px 0;
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
NePreviewComponent.ctorParameters = () => [];
NePreviewComponent.propDecorators = {
    imgList: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NePreviewComponent.prototype.imgList;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmUtcHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZS1pbWctcHJldmlldy8iLCJzb3VyY2VzIjpbImxpYi9uZS1wcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBb0Q3QyxNQUFNO0lBSUosaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBekRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO2dCQUNELE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUNSLENBQUM7YUFDSDs7Ozs7c0JBR0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJTUdMSVNUIH0gZnJvbSAnLi9uZS1wcmV2aWV3Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmUtbmUtcHJldmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBpZD1cImdhbGxleVwiIHZpZXdlcj5cbiAgICAgIDx1bCBjbGFzcz1cInBpY3R1cmVzXCI+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpbWdMaXN0XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJ7e2l0ZW0udXJsfX1cIiBhbHQ9XCJ7e2l0ZW0uYWx0fX1cIj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICAucGljdHVyZXMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAucGljdHVyZXMgPiBsaSB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIG1hcmdpbjogMCAtMXB4IC0xcHggMDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGN1cnNvcjogem9vbS1pbjtcblxuICAgICAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCAqL1xuICAgICAgICBkaXNwbGF5Oi1tcy1mbGV4Ym94O1xuICAgICAgICAtbXMtZmxleC1wYWNrOmNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246Y2VudGVyO1xuXG4gICAgICAgIC8qIEZpcmVmb3ggKi9cbiAgICAgICAgZGlzcGxheTotbW96LWJveDtcbiAgICAgICAgLW1vei1ib3gtcGFjazpjZW50ZXI7XG4gICAgICAgIC1tb3otYm94LWFsaWduOmNlbnRlcjtcblxuICAgICAgICAvKiBTYWZhcmksIE9wZXJhLCBhbmQgQ2hyb21lICovXG4gICAgICAgIGRpc3BsYXk6LXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6Y2VudGVyO1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7XG4gICAgfVxuXG4gICAgLnBpY3R1cmVzID4gbGkgPiBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY3Vyc29yOiAtd2Via2l0LXpvb20taW47XG4gICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBOZVByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGltZ0xpc3Q6IElNR0xJU1Q7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=