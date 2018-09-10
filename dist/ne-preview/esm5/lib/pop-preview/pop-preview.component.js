/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { IMGLIST } from '../model';
var PopPreviewComponent = /** @class */ (function () {
    function PopPreviewComponent() {
    }
    /**
     * @return {?}
     */
    PopPreviewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PopPreviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ne-pop-preview',
                    template: "\n    <div id=\"galley\" viewer>\n      <ul class=\"pictures\">\n        <li *ngFor=\"let item of imgList\" [ngStyle]=\"{'width': snWidth, 'height': snHeight}\">\n          <img src=\"{{item.url}}\" alt=\"{{item.alt}}\">\n        </li>\n      </ul>\n    </div>\n  ",
                    styles: ["\n    .pictures {\n        margin: 0;\n        padding: 0;\n        height: 200px;\n        list-style: none;\n    }\n\n    .pictures > li {\n        float: left;\n        width: 150px;\n        height: 150px;\n        margin: 4px;\n        border: 1px solid transparent;\n        overflow: hidden;\n        cursor: zoom-in;\n\n        /* Internet Explorer 10 */\n        display:-ms-flexbox;\n        -ms-flex-pack:center;\n        -ms-flex-align:center;\n\n        /* Firefox */\n        display:-moz-box;\n        -moz-box-pack:center;\n        -moz-box-align:center;\n\n        /* Safari, Opera, and Chrome */\n        display:-webkit-box;\n        -webkit-box-pack:center;\n        -webkit-box-align:center;\n\n    }\n\n    .pictures > li > img {\n        width: 100%;\n        cursor: -webkit-zoom-in;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    PopPreviewComponent.ctorParameters = function () { return []; };
    PopPreviewComponent.propDecorators = {
        imgList: [{ type: Input }],
        snHeight: [{ type: Input }],
        snWidth: [{ type: Input }]
    };
    return PopPreviewComponent;
}());
export { PopPreviewComponent };
if (false) {
    /** @type {?} */
    PopPreviewComponent.prototype.imgList;
    /** @type {?} */
    PopPreviewComponent.prototype.snHeight;
    /** @type {?} */
    PopPreviewComponent.prototype.snWidth;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wLXByZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmUtaW1nLXByZXZpZXcvIiwic291cmNlcyI6WyJsaWIvcG9wLXByZXZpZXcvcG9wLXByZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDOztJQTJEakM7S0FBaUI7Ozs7SUFFakIsc0NBQVE7OztJQUFSO0tBQ0M7O2dCQTVERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLDBRQVFUO29CQUNELE1BQU0sRUFBRSxDQUFDLG96QkFzQ1IsQ0FBQztpQkFDSDs7Ozs7MEJBR0UsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7OzhCQTNEUjs7U0F1RGEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElNR0xJU1QgfSBmcm9tICcuLi9tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25lLXBvcC1wcmV2aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGlkPVwiZ2FsbGV5XCIgdmlld2VyPlxuICAgICAgPHVsIGNsYXNzPVwicGljdHVyZXNcIj5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGltZ0xpc3RcIiBbbmdTdHlsZV09XCJ7J3dpZHRoJzogc25XaWR0aCwgJ2hlaWdodCc6IHNuSGVpZ2h0fVwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwie3tpdGVtLnVybH19XCIgYWx0PVwie3tpdGVtLmFsdH19XCI+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgLnBpY3R1cmVzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cblxuICAgIC5waWN0dXJlcyA+IGxpIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBjdXJzb3I6IHpvb20taW47XG5cbiAgICAgICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAgKi9cbiAgICAgICAgZGlzcGxheTotbXMtZmxleGJveDtcbiAgICAgICAgLW1zLWZsZXgtcGFjazpjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOmNlbnRlcjtcblxuICAgICAgICAvKiBGaXJlZm94ICovXG4gICAgICAgIGRpc3BsYXk6LW1vei1ib3g7XG4gICAgICAgIC1tb3otYm94LXBhY2s6Y2VudGVyO1xuICAgICAgICAtbW96LWJveC1hbGlnbjpjZW50ZXI7XG5cbiAgICAgICAgLyogU2FmYXJpLCBPcGVyYSwgYW5kIENocm9tZSAqL1xuICAgICAgICBkaXNwbGF5Oi13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1wYWNrOmNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyO1xuXG4gICAgfVxuXG4gICAgLnBpY3R1cmVzID4gbGkgPiBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY3Vyc29yOiAtd2Via2l0LXpvb20taW47XG4gICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBQb3BQcmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBpbWdMaXN0OiBJTUdMSVNUO1xuICBASW5wdXQoKSBzbkhlaWdodDogc3RyaW5nO1xuICBASW5wdXQoKSBzbldpZHRoOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=