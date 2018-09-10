/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { IMGLIST } from './ne-preview.model';
var NePreviewComponent = /** @class */ (function () {
    function NePreviewComponent() {
    }
    /**
     * @return {?}
     */
    NePreviewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NePreviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ne-ne-preview',
                    template: "\n    <div id=\"galley\" viewer>\n      <ul class=\"pictures\">\n        <li *ngFor=\"let item of imgList\">\n          <img src=\"{{item.url}}\" alt=\"{{item.alt}}\">\n        </li>\n      </ul>\n    </div>\n  ",
                    styles: ["\n    .pictures {\n        margin: 0;\n        padding: 0;\n        height: 200px;\n        list-style: none;\n      }\n\n    .pictures > li {\n        float: left;\n        width: 150px;\n        height: 150px;\n        margin: 0 -1px -1px 0;\n        border: 1px solid transparent;\n        overflow: hidden;\n        cursor: zoom-in;\n\n        /* Internet Explorer 10 */\n        display:-ms-flexbox;\n        -ms-flex-pack:center;\n        -ms-flex-align:center;\n\n        /* Firefox */\n        display:-moz-box;\n        -moz-box-pack:center;\n        -moz-box-align:center;\n\n        /* Safari, Opera, and Chrome */\n        display:-webkit-box;\n        -webkit-box-pack:center;\n        -webkit-box-align:center;\n    }\n\n    .pictures > li > img {\n        width: 100%;\n        cursor: -webkit-zoom-in;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NePreviewComponent.ctorParameters = function () { return []; };
    NePreviewComponent.propDecorators = {
        imgList: [{ type: Input }]
    };
    return NePreviewComponent;
}());
export { NePreviewComponent };
if (false) {
    /** @type {?} */
    NePreviewComponent.prototype.imgList;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmUtcHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZS1pbWctcHJldmlldy8iLCJzb3VyY2VzIjpbImxpYi9uZS1wcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQXdEM0M7S0FBaUI7Ozs7SUFFakIscUNBQVE7OztJQUFSO0tBQ0M7O2dCQXpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxxTkFRVDtvQkFDRCxNQUFNLEVBQUUsQ0FBQyw4ekJBcUNSLENBQUM7aUJBQ0g7Ozs7OzBCQUdFLEtBQUs7OzZCQXhEUjs7U0FzRGEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElNR0xJU1QgfSBmcm9tICcuL25lLXByZXZpZXcubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZS1uZS1wcmV2aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGlkPVwiZ2FsbGV5XCIgdmlld2VyPlxuICAgICAgPHVsIGNsYXNzPVwicGljdHVyZXNcIj5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGltZ0xpc3RcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cInt7aXRlbS51cmx9fVwiIGFsdD1cInt7aXRlbS5hbHR9fVwiPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIC5waWN0dXJlcyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIH1cblxuICAgIC5waWN0dXJlcyA+IGxpIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgbWFyZ2luOiAwIC0xcHggLTFweCAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgY3Vyc29yOiB6b29tLWluO1xuXG4gICAgICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwICovXG4gICAgICAgIGRpc3BsYXk6LW1zLWZsZXhib3g7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6Y2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjpjZW50ZXI7XG5cbiAgICAgICAgLyogRmlyZWZveCAqL1xuICAgICAgICBkaXNwbGF5Oi1tb3otYm94O1xuICAgICAgICAtbW96LWJveC1wYWNrOmNlbnRlcjtcbiAgICAgICAgLW1vei1ib3gtYWxpZ246Y2VudGVyO1xuXG4gICAgICAgIC8qIFNhZmFyaSwgT3BlcmEsIGFuZCBDaHJvbWUgKi9cbiAgICAgICAgZGlzcGxheTotd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOmNlbnRlcjtcbiAgICB9XG5cbiAgICAucGljdHVyZXMgPiBsaSA+IGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjdXJzb3I6IC13ZWJraXQtem9vbS1pbjtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIE5lUHJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaW1nTGlzdDogSU1HTElTVDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==