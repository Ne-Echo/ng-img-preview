import { Injectable, Component, ViewChild, ElementRef, EventEmitter, HostListener, Input, Output, ContentChild, ContentChildren, Directive, NgModule, Renderer2, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NePreviewService = /** @class */ (function () {
    function NePreviewService() {
    }
    NePreviewService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NePreviewService.ctorParameters = function () { return []; };
    /** @nocollapse */ NePreviewService.ngInjectableDef = defineInjectable({ factory: function NePreviewService_Factory() { return new NePreviewService(); }, token: NePreviewService, providedIn: "root" });
    return NePreviewService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IMGLIST = /** @class */ (function () {
    function IMGLIST() {
    }
    return IMGLIST;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PagePreviewComponent = /** @class */ (function () {
    function PagePreviewComponent() {
        this.zoomRatio = 1.2;
        this.isSpinning = false;
        this.mouseDown = false;
        this.disX = 0;
        this.disY = 0;
        this.nextDeg = 0;
        this.nowImgIndex = 0;
        this.snPageBtnClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    PagePreviewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nowImgUrl = this.imgList[this.nowImgIndex].url;
        this.isSpinning = true;
        setTimeout(function () {
            _this.setImgSize();
        }, 1000);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PagePreviewComponent.prototype.onMousedown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.mouseDown = true;
        if (event.target == this.imageInstance.nativeElement) {
            event.preventDefault(); //禁止浏览器自带拖动效果
            this.focusElement = this.imageInstance.nativeElement;
            this.disX = event.clientX - this.imageInstance.nativeElement.offsetLeft;
            this.disY = event.clientY - this.imageInstance.nativeElement.offsetTop;
            this.imageInstance.nativeElement.setCapture && this.imageInstance.nativeElement.setCapture.setCapture();
        }
        else {
            this.mouseDown = false;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PagePreviewComponent.prototype.onMousemove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.mouseDown) {
            if (this.focusElement == this.imageInstance.nativeElement) {
                /** @type {?} */
                var iL = event.clientX - this.disX;
                /** @type {?} */
                var iT = event.clientY - this.disY;
                // iL <= 0 && (iL = 0);
                // iL > maxW && (iL = maxW);
                this.imageInstance.nativeElement.style.left = iL + "px";
                this.imageInstance.nativeElement.style.top = iT + "px";
            }
        }
    };
    /**
     * @return {?}
     */
    PagePreviewComponent.prototype.onMouseup = /**
     * @return {?}
     */
    function () {
        this.mouseDown = false;
        this.focusElement = null;
        document.onmousemove = null;
        document.onmouseup = null;
        this.imageInstance.nativeElement.releaseCapture && this.imageInstance.nativeElement.releaseCapture();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PagePreviewComponent.prototype.mousewheel = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log("mousewheel", event);
        if (event.target == this.imageInstance.nativeElement) {
            event.preventDefault(); //禁止浏览器自带拖动效果
            if (event.wheelDelta > 0) {
                console.log(">0", event.wheelDelta);
                this.zoom();
            }
            else {
                console.log("<0", event.wheelDelta);
                this.zoomOut();
            }
            this.imageInstance.nativeElement.setCapture && this.imageInstance.nativeElement.setCapture.setCapture();
        }
    };
    /**
     * @return {?}
     */
    PagePreviewComponent.prototype.setImgSize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var containerWidth = this.container.nativeElement.clientWidth;
        /** @type {?} */
        var containerHeight = this.container.nativeElement.clientHeight;
        /** @type {?} */
        var imgNaturalWidth = this.imageInstance.nativeElement.naturalWidth;
        /** @type {?} */
        var imgNaturalHeight = this.imageInstance.nativeElement.naturalHeight;
        this.imgRatio = imgNaturalWidth / imgNaturalHeight;
        this.imageInstance.nativeElement.style.top = 0;
        this.imageInstance.nativeElement.className = "image";
        if (this.imgRatio < containerWidth / containerHeight) {
            /** @type {?} */
            var imgWidth = containerHeight / imgNaturalHeight * imgNaturalWidth;
            this.imageInstance.nativeElement.style.width = imgWidth + 'px';
            this.imageInstance.nativeElement.style.height = containerHeight + 'px';
            this.imageInstance.nativeElement.style.left = (containerWidth - imgWidth) / 2 + 'px';
        }
        else {
            /** @type {?} */
            var imgHeight = containerWidth / imgNaturalWidth * imgNaturalHeight;
            this.imageInstance.nativeElement.style.width = containerWidth + 'px';
            this.imageInstance.nativeElement.style.height = imgHeight + 'px';
            this.imageInstance.nativeElement.style.top = (containerHeight - imgHeight) / 2 + 'px';
        }
        this.isSpinning = false;
    };
    /**
     * @return {?}
     */
    PagePreviewComponent.prototype.prev = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nowImgIndex > 0) {
            this.isSpinning = true;
            this.nowImgIndex--;
            this.nowImgUrl = this.imgList[this.nowImgIndex].url;
            this.snPageBtnClick.emit(this.nowImgIndex);
            setTimeout(function () {
                _this.setImgSize();
            }, 1000);
        }
    };
    /**
     * @return {?}
     */
    PagePreviewComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nowImgIndex < this.imgList.length - 1) {
            this.isSpinning = true;
            this.nowImgIndex++;
            this.nowImgUrl = this.imgList[this.nowImgIndex].url;
            this.snPageBtnClick.emit(this.nowImgIndex);
            setTimeout(function () {
                _this.setImgSize();
            }, 1000);
        }
    };
    /**
     * @return {?}
     */
    PagePreviewComponent.prototype.zoom = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newImgWidth = Math.ceil(this.imageInstance.nativeElement.clientWidth * this.zoomRatio);
        /** @type {?} */
        var newImgHeight = Math.ceil(this.imageInstance.nativeElement.clientHeight * this.zoomRatio);
        this.updateImgSize('zoom', newImgWidth, newImgHeight);
    };
    /**
     * @return {?}
     */
    PagePreviewComponent.prototype.zoomOut = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newImgWidth = Math.ceil(this.imageInstance.nativeElement.clientWidth / this.zoomRatio);
        /** @type {?} */
        var newImgHeight = Math.ceil(this.imageInstance.nativeElement.clientHeight / this.zoomRatio);
        this.updateImgSize('zoomout', newImgWidth, newImgHeight);
    };
    /**
     * @return {?}
     */
    PagePreviewComponent.prototype.rotate = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rotateClass = this.imageInstance.nativeElement.className.match(/(rotate)(\d*)/);
        if (rotateClass) {
            this.nextDeg = (rotateClass[2] * 1 + 90) % 360;
        }
        else {
            this.nextDeg = 90;
        }
        this.imageInstance.nativeElement.className = "image rotate" + this.nextDeg;
        this.imageInstance.nativeElement.style.left = (this.container.nativeElement.clientWidth - this.imageInstance.nativeElement.clientWidth) / 2 + 'px';
        this.imageInstance.nativeElement.style.top = (this.container.nativeElement.clientHeight - this.imageInstance.nativeElement.clientHeight) / 2 + 'px';
    };
    /**
     * @param {?} type
     * @param {?} newImgWidth
     * @param {?} newImgHeight
     * @return {?}
     */
    PagePreviewComponent.prototype.updateImgSize = /**
     * @param {?} type
     * @param {?} newImgWidth
     * @param {?} newImgHeight
     * @return {?}
     */
    function (type, newImgWidth, newImgHeight) {
        /** @type {?} */
        var containerWidth = this.container.nativeElement.clientWidth;
        /** @type {?} */
        var containerHeight = this.container.nativeElement.clientHeight;
        /** @type {?} */
        var isVertical = true;
        this.imageInstance.nativeElement.style.width = newImgWidth + 'px';
        this.imageInstance.nativeElement.style.height = newImgHeight + 'px';
        if (containerWidth > isVertical ? newImgWidth : newImgHeight) {
            this.imageInstance.nativeElement.style.left = (containerWidth - newImgWidth) / 2 + 'px';
        }
        else {
            /** @type {?} */
            var iL = this.imageInstance.nativeElement.offsetTop + newImgWidth / 10 * (type === 'zoom' ? -1 : 1);
            /** @type {?} */
            var iR = containerWidth - newImgWidth;
            iL >= 0 && (iL = 0);
            iL <= iR && (iL = iR);
            this.imageInstance.nativeElement.style.left = iL + 'px';
        }
        if (containerHeight > isVertical ? newImgHeight : newImgWidth) {
            this.imageInstance.nativeElement.style.top = (containerHeight - newImgHeight) / 2 + 'px';
        }
        else {
            /** @type {?} */
            var iT = this.imageInstance.nativeElement.offsetLeft + newImgHeight / 10 * (type === 'zoom' ? -1 : 1);
            /** @type {?} */
            var iB = containerHeight - newImgHeight;
            iT >= 0 && (iT = 0);
            iT <= iB && (iT = iB);
            this.imageInstance.nativeElement.style.top = iT + "px";
        }
    };
    PagePreviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ne-page-preview',
                    template: "<nz-spin [nzSpinning]=\"isSpinning\">\n  <div class=\"box\" [ngStyle]=\"{'height': snHeight}\">\n    <div #container class=\"container\">\n      <img #imageInstance class=\"image rotate0\" [src]=\"nowImgUrl\" />\n      <div (click)=\"prev()\" class=\"pageTurnSpan prev\"><i class=\"anticon anticon-left\"></i></div>\n      <div (click)=\"next()\" class=\"pageTurnSpan next\"><i class=\"anticon anticon-right\"></i></div>\n      <div class=\"tool\">\n        <div class=\"toolct\">\n          <span class=\"oper_bigger\" title=\"\u653E\u5927\u56FE\u7247\" (click)=\"zoom()\"><i class=\"anticon anticon-plus-circle-o\"></i></span>\n          <span class=\"oper_smaller\" title=\"\u7F29\u5C0F\u56FE\u7247\" (click)=\"zoomOut()\"><i class=\"anticon anticon-minus-circle-o\"></i></span>\n          <span class=\"oper_rotate\" title=\"\u5411\u53F3\u65CB\u8F6C\" (click)=\"rotate()\"><i class=\"anticon anticon-reload\"></i></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</nz-spin>\n",
                    styles: [".box{width:100%;height:400px;border:1px solid rgba(0,0,0,.15);position:relative;overflow:hidden}.box i{position:relative;z-index:99999;display:inline-block}.box .rotate0{transform:rotate(0);-webkit-transform:rotate(0)}.box .rotate90{transform:rotate(90deg);-webkit-transform:rotate(90deg)}.box .rotate180{transform:rotate(180deg);-webkit-transform:rotate(180deg)}.box .rotate270{transform:rotate(270deg);-webkit-transform:rotate(270deg)}.box .container:hover .pageTurnSpan,.box .container:hover .tool{display:block}.box .container{width:100%;height:100%;background:rgba(0,0,0,.1)}.box .container .image{position:absolute;margin:0;padding:0;z-index:999;cursor:move}.box .container .image.active{display:block}.box .container .tool{position:absolute;bottom:4px;width:100%;text-align:center;display:none;z-index:99999}.box .container .toolct{display:inline-block;height:30px;background-color:#6f6965;padding:5px 14px;box-sizing:border-box;border-radius:6px}.box .container .toolct span{margin:0 10px}.box .container .toolct i{display:inline-block;cursor:pointer}.box .container .percentTip{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;width:100px;height:30px;z-index:9999;text-align:center;line-height:30px;font-size:16px;border-radius:8px;color:#fff;background:linear-gradient(315deg,#4f504e,#151313);background:-o-linear-gradient(left,#4f504e,#151313);background:-webkit-gradient(linear,100% 0,100% 0,from(#4f504e),to(#151313))}.box .container .pageTurnSpan{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;z-index:99999;display:none;width:30px;height:38px;font-size:30px;line-height:38px;cursor:pointer}.box .container .pageTurnSpan.prev{float:left;margin-left:9px}.box .container .pageTurnSpan.next{float:right;margin-right:9px}.box .container .pageTurnSpan.next.active i,.box .container .pageTurnSpan.prev.active i{display:inline-block}"]
                },] },
    ];
    /** @nocollapse */
    PagePreviewComponent.ctorParameters = function () { return []; };
    PagePreviewComponent.propDecorators = {
        imgList: [{ type: Input }],
        snHeight: [{ type: Input }],
        snPageBtnClick: [{ type: Output }],
        container: [{ type: ViewChild, args: ["container",] }],
        imageInstance: [{ type: ViewChild, args: ["imageInstance",] }],
        onMousedown: [{ type: HostListener, args: ["mousedown", ["$event"],] }],
        onMousemove: [{ type: HostListener, args: ['mousemove', ['$event'],] }],
        onMouseup: [{ type: HostListener, args: ['window:mouseup',] }],
        mousewheel: [{ type: HostListener, args: ["mousewheel", ["$event"],] }]
    };
    return PagePreviewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ViewerContentDirective = /** @class */ (function () {
    function ViewerContentDirective(_el) {
        this._el = _el;
        this.nativeElement = this._el.nativeElement;
    }
    ViewerContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[viewer-content]',
                },] },
    ];
    /** @nocollapse */
    ViewerContentDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ViewerContentDirective;
}());
var ViewerDirective = /** @class */ (function () {
    function ViewerDirective(_elementRef, _render) {
        this._elementRef = _elementRef;
        this._render = _render;
        this.originalAttr = "name";
        this.nativeElement = this._elementRef.nativeElement;
    }
    Object.defineProperty(ViewerDirective.prototype, "_imgContents", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.imgContents = value;
            this.renderContent(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ViewerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderContent();
    };
    /**
     * @param {?=} flag
     * @return {?}
     */
    ViewerDirective.prototype.renderContent = /**
     * @param {?=} flag
     * @return {?}
     */
    function (flag) {
        var _this = this;
        /** @type {?} */
        var nativeEl = this.nativeElement;
        if (this.content) {
            nativeEl = this.content.nativeElement;
        }
        setTimeout(function () {
            /** @type {?} */
            var imgs = nativeEl.getElementsByTagName('img');
            if (imgs.length) {
                if (_this.viewer) {
                    _this.viewer.destroy();
                }
                // if (!flag) {
                //   imgs[0].onload = () => {
                //     this.viewer = new Viewer(this.nativeElement, {
                //       url: this.originalAttr,
                //     });
                //   }
                // } else {
                //   imgs[imgs.length-1].onload = () => {
                //     this.viewer = new Viewer(this.nativeElement, {
                //       url: this.originalAttr,
                //     });
                //   }
                // }
                // if (!flag) {
                //   imgs[0].onload = () => {
                //     this.viewer = new Viewer(this.nativeElement, {
                //       url: this.originalAttr,
                //     });
                //   }
                // } else {
                //   imgs[imgs.length-1].onload = () => {
                //     this.viewer = new Viewer(this.nativeElement, {
                //       url: this.originalAttr,
                //     });
                //   }
                // }
                _this.viewer = new Viewer(_this.nativeElement, {
                    url: _this.originalAttr,
                });
            }
        }, 500);
    };
    /**
     * @return {?}
     */
    ViewerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.viewer) {
            this.viewer.destroy();
        }
    };
    ViewerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[viewer]'
                },] },
    ];
    /** @nocollapse */
    ViewerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    ViewerDirective.propDecorators = {
        originalAttr: [{ type: Input }],
        content: [{ type: ContentChild, args: ['content',] }],
        _imgContents: [{ type: ContentChildren, args: [ViewerContentDirective,] }]
    };
    return ViewerDirective;
}());
var ViewerDirectiveModule = /** @class */ (function () {
    function ViewerDirectiveModule() {
    }
    ViewerDirectiveModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ViewerDirective, ViewerContentDirective
                    ],
                    exports: [ViewerDirective, ViewerContentDirective],
                    imports: [
                        CommonModule
                    ]
                },] },
    ];
    return ViewerDirectiveModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NePreviewModule = /** @class */ (function () {
    function NePreviewModule() {
    }
    NePreviewModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        NgZorroAntdModule,
                        ViewerDirectiveModule
                    ],
                    declarations: [PopPreviewComponent, PagePreviewComponent],
                    exports: [PopPreviewComponent, PagePreviewComponent]
                },] },
    ];
    return NePreviewModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NePreviewService, NePreviewModule, IMGLIST, PagePreviewComponent as ɵe, PopPreviewComponent as ɵd, ViewerContentDirective as ɵa, ViewerDirective as ɵb, ViewerDirectiveModule as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmUtaW1nLXByZXZpZXcuanMubWFwIiwic291cmNlcyI6WyJuZzovL25lLWltZy1wcmV2aWV3L2xpYi9uZS1wcmV2aWV3LnNlcnZpY2UudHMiLCJuZzovL25lLWltZy1wcmV2aWV3L2xpYi9tb2RlbC9uZS1wcmV2aWV3Lm1vZGVsLnRzIiwibmc6Ly9uZS1pbWctcHJldmlldy9saWIvcG9wLXByZXZpZXcvcG9wLXByZXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZS1pbWctcHJldmlldy9saWIvcGFnZS1wcmV2aWV3L3BhZ2UtcHJldmlldy5jb21wb25lbnQudHMiLCJuZzovL25lLWltZy1wcmV2aWV3L2xpYi9wb3AtcHJldmlldy9wb3AtcHJldmlldy5kaXJlY3RpdmUudHMiLCJuZzovL25lLWltZy1wcmV2aWV3L2xpYi9uZS1wcmV2aWV3Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5lUHJldmlld1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJleHBvcnQgY2xhc3MgSU1HTElTVCB7XG4gICAgZGF0YU9yaWdpbmFsPzogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZztcbiAgICBhbHQ/OiBzdHJpbmc7XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElNR0xJU1QgfSBmcm9tICcuLi9tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25lLXBvcC1wcmV2aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGlkPVwiZ2FsbGV5XCIgdmlld2VyPlxuICAgICAgPHVsIGNsYXNzPVwicGljdHVyZXNcIj5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGltZ0xpc3RcIiBbbmdTdHlsZV09XCJ7J3dpZHRoJzogc25XaWR0aCwgJ2hlaWdodCc6IHNuSGVpZ2h0fVwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwie3tpdGVtLnVybH19XCIgYWx0PVwie3tpdGVtLmFsdH19XCI+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgLnBpY3R1cmVzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cblxuICAgIC5waWN0dXJlcyA+IGxpIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBjdXJzb3I6IHpvb20taW47XG5cbiAgICAgICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAgKi9cbiAgICAgICAgZGlzcGxheTotbXMtZmxleGJveDtcbiAgICAgICAgLW1zLWZsZXgtcGFjazpjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOmNlbnRlcjtcblxuICAgICAgICAvKiBGaXJlZm94ICovXG4gICAgICAgIGRpc3BsYXk6LW1vei1ib3g7XG4gICAgICAgIC1tb3otYm94LXBhY2s6Y2VudGVyO1xuICAgICAgICAtbW96LWJveC1hbGlnbjpjZW50ZXI7XG5cbiAgICAgICAgLyogU2FmYXJpLCBPcGVyYSwgYW5kIENocm9tZSAqL1xuICAgICAgICBkaXNwbGF5Oi13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1wYWNrOmNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyO1xuXG4gICAgfVxuXG4gICAgLnBpY3R1cmVzID4gbGkgPiBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY3Vyc29yOiAtd2Via2l0LXpvb20taW47XG4gICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBQb3BQcmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBpbWdMaXN0OiBJTUdMSVNUO1xuICBASW5wdXQoKSBzbkhlaWdodDogc3RyaW5nO1xuICBASW5wdXQoKSBzbldpZHRoOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJTUdMSVNUIH0gZnJvbSAnLi4vbW9kZWwvbmUtcHJldmlldy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25lLXBhZ2UtcHJldmlldycsXG4gIHRlbXBsYXRlOiBgPG56LXNwaW4gW256U3Bpbm5pbmddPVwiaXNTcGlubmluZ1wiPlxuICA8ZGl2IGNsYXNzPVwiYm94XCIgW25nU3R5bGVdPVwieydoZWlnaHQnOiBzbkhlaWdodH1cIj5cbiAgICA8ZGl2ICNjb250YWluZXIgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxpbWcgI2ltYWdlSW5zdGFuY2UgY2xhc3M9XCJpbWFnZSByb3RhdGUwXCIgW3NyY109XCJub3dJbWdVcmxcIiAvPlxuICAgICAgPGRpdiAoY2xpY2spPVwicHJldigpXCIgY2xhc3M9XCJwYWdlVHVyblNwYW4gcHJldlwiPjxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWxlZnRcIj48L2k+PC9kaXY+XG4gICAgICA8ZGl2IChjbGljayk9XCJuZXh0KClcIiBjbGFzcz1cInBhZ2VUdXJuU3BhbiBuZXh0XCI+PGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcmlnaHRcIj48L2k+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9vbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbGN0XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJvcGVyX2JpZ2dlclwiIHRpdGxlPVwiw6bClMK+w6XCpMKnw6XCm8K+w6fCicKHXCIgKGNsaWNrKT1cInpvb20oKVwiPjxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXBsdXMtY2lyY2xlLW9cIj48L2k+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwib3Blcl9zbWFsbGVyXCIgdGl0bGU9XCLDp8K8wqnDpcKwwo/DpcKbwr7Dp8KJwodcIiAoY2xpY2spPVwiem9vbU91dCgpXCI+PGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24tbWludXMtY2lyY2xlLW9cIj48L2k+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwib3Blcl9yb3RhdGVcIiB0aXRsZT1cIsOlwpDCkcOlwo/Cs8OmwpfCi8Oowr3CrFwiIChjbGljayk9XCJyb3RhdGUoKVwiPjxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXJlbG9hZFwiPjwvaT48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uei1zcGluPlxuYCxcbiAgc3R5bGVzOiBbYC5ib3h7d2lkdGg6MTAwJTtoZWlnaHQ6NDAwcHg7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNSk7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVufS5ib3ggaXtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4Ojk5OTk5O2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5ib3ggLnJvdGF0ZTB7dHJhbnNmb3JtOnJvdGF0ZSgwKTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCl9LmJveCAucm90YXRlOTB7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0uYm94IC5yb3RhdGUxODB7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS5ib3ggLnJvdGF0ZTI3MHt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9LmJveCAuY29udGFpbmVyOmhvdmVyIC5wYWdlVHVyblNwYW4sLmJveCAuY29udGFpbmVyOmhvdmVyIC50b29se2Rpc3BsYXk6YmxvY2t9LmJveCAuY29udGFpbmVye3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xKX0uYm94IC5jb250YWluZXIgLmltYWdle3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbjowO3BhZGRpbmc6MDt6LWluZGV4Ojk5OTtjdXJzb3I6bW92ZX0uYm94IC5jb250YWluZXIgLmltYWdlLmFjdGl2ZXtkaXNwbGF5OmJsb2NrfS5ib3ggLmNvbnRhaW5lciAudG9vbHtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206NHB4O3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7ZGlzcGxheTpub25lO3otaW5kZXg6OTk5OTl9LmJveCAuY29udGFpbmVyIC50b29sY3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjMwcHg7YmFja2dyb3VuZC1jb2xvcjojNmY2OTY1O3BhZGRpbmc6NXB4IDE0cHg7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlci1yYWRpdXM6NnB4fS5ib3ggLmNvbnRhaW5lciAudG9vbGN0IHNwYW57bWFyZ2luOjAgMTBweH0uYm94IC5jb250YWluZXIgLnRvb2xjdCBpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO2N1cnNvcjpwb2ludGVyfS5ib3ggLmNvbnRhaW5lciAucGVyY2VudFRpcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtyaWdodDowO2xlZnQ6MDttYXJnaW46YXV0bzt3aWR0aDoxMDBweDtoZWlnaHQ6MzBweDt6LWluZGV4Ojk5OTk7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MzBweDtmb250LXNpemU6MTZweDtib3JkZXItcmFkaXVzOjhweDtjb2xvcjojZmZmO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDMxNWRlZywjNGY1MDRlLCMxNTEzMTMpO2JhY2tncm91bmQ6LW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIzRmNTA0ZSwjMTUxMzEzKTtiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLDEwMCUgMCwxMDAlIDAsZnJvbSgjNGY1MDRlKSx0bygjMTUxMzEzKSl9LmJveCAuY29udGFpbmVyIC5wYWdlVHVyblNwYW57cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7cmlnaHQ6MDtsZWZ0OjA7bWFyZ2luOmF1dG87ei1pbmRleDo5OTk5OTtkaXNwbGF5Om5vbmU7d2lkdGg6MzBweDtoZWlnaHQ6MzhweDtmb250LXNpemU6MzBweDtsaW5lLWhlaWdodDozOHB4O2N1cnNvcjpwb2ludGVyfS5ib3ggLmNvbnRhaW5lciAucGFnZVR1cm5TcGFuLnByZXZ7ZmxvYXQ6bGVmdDttYXJnaW4tbGVmdDo5cHh9LmJveCAuY29udGFpbmVyIC5wYWdlVHVyblNwYW4ubmV4dHtmbG9hdDpyaWdodDttYXJnaW4tcmlnaHQ6OXB4fS5ib3ggLmNvbnRhaW5lciAucGFnZVR1cm5TcGFuLm5leHQuYWN0aXZlIGksLmJveCAuY29udGFpbmVyIC5wYWdlVHVyblNwYW4ucHJldi5hY3RpdmUgaXtkaXNwbGF5OmlubGluZS1ibG9ja31gXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlUHJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBmb2N1c0VsZW1lbnQ6IGFueTtcbiAgICB6b29tUmF0aW86IG51bWJlciA9IDEuMjtcbiAgICBpbWdSYXRpbzogbnVtYmVyO1xuICAgIGlzU3Bpbm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBtb3VzZURvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBkaXNYOiBudW1iZXIgPSAwO1xuICAgIGRpc1k6IG51bWJlciA9IDA7XG4gICAgbmV4dERlZzogbnVtYmVyID0gMFxuICAgIG5vd0ltZ1VybDogc3RyaW5nO1xuICAgIG5vd0ltZ0luZGV4OiBudW1iZXIgPSAwO1xuICBcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgQElucHV0KCkgaW1nTGlzdDogSU1HTElTVFtdO1xuICAgIEBJbnB1dCgpIHNuSGVpZ2h0Pzogc3RyaW5nO1xuICAgIEBPdXRwdXQoKSBzblBhZ2VCdG5DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBcbiAgICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwiaW1hZ2VJbnN0YW5jZVwiKSBpbWFnZUluc3RhbmNlOiBFbGVtZW50UmVmO1xuICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMubm93SW1nVXJsID0gdGhpcy5pbWdMaXN0W3RoaXMubm93SW1nSW5kZXhdLnVybDtcbiAgICAgIHRoaXMuaXNTcGlubmluZyA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRJbWdTaXplKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIFxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7Ly/Dp8KmwoHDpsKtwqLDpsK1wo/DqMKnwojDpcKZwqjDqMKHwqrDpcK4wqbDpsKLwpbDpcKKwqjDpsKVwojDpsKewpxcbiAgICAgICAgdGhpcy5mb2N1c0VsZW1lbnQgPSB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5kaXNYID0gZXZlbnQuY2xpZW50WCAtIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICAgIHRoaXMuZGlzWSA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnNldENhcHR1cmUgJiYgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc2V0Q2FwdHVyZS5zZXRDYXB0dXJlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZW1vdmUnLCBbJyRldmVudCddKVxuICAgIG9uTW91c2Vtb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNFbGVtZW50ID09IHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgbGV0IGlMID0gZXZlbnQuY2xpZW50WCAtIHRoaXMuZGlzWDtcbiAgICAgICAgICBsZXQgaVQgPSBldmVudC5jbGllbnRZIC0gdGhpcy5kaXNZO1xuICBcbiAgICAgICAgICAvLyBpTCA8PSAwICYmIChpTCA9IDApO1xuICAgICAgICAgIC8vIGlMID4gbWF4VyAmJiAoaUwgPSBtYXhXKTtcbiAgICAgICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gaUwgKyBcInB4XCI7XG4gICAgICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gaVQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93Om1vdXNldXAnKVxuICAgIG9uTW91c2V1cCgpIHtcbiAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICB0aGlzLmZvY3VzRWxlbWVudCA9IG51bGw7XG4gICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQucmVsZWFzZUNhcHR1cmUgJiYgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQucmVsZWFzZUNhcHR1cmUoKTtcbiAgICB9O1xuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIFtcIiRldmVudFwiXSlcbiAgICBtb3VzZXdoZWVsKGV2ZW50OiBNb3VzZUV2ZW50IHwgYW55KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdXNld2hlZWxcIiwgZXZlbnQpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOy8vw6fCpsKBw6bCrcKiw6bCtcKPw6jCp8KIw6XCmcKow6jCh8Kqw6XCuMKmw6bCi8KWw6XCisKow6bClcKIw6bCnsKcXG4gICAgICAgIFxuICAgICAgICBpZihldmVudC53aGVlbERlbHRhID4gMCl7XG4gICAgICAgICAgY29uc29sZS5sb2coXCI+MFwiLCBldmVudC53aGVlbERlbHRhKTtcbiAgICAgICAgICB0aGlzLnpvb20oKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgY29uc29sZS5sb2coXCI8MFwiLCBldmVudC53aGVlbERlbHRhKTtcbiAgICAgICAgICB0aGlzLnpvb21PdXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zZXRDYXB0dXJlICYmIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnNldENhcHR1cmUuc2V0Q2FwdHVyZSgpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgc2V0SW1nU2l6ZSgpIHtcbiAgICAgIGxldCBjb250YWluZXJXaWR0aCA9IHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICBsZXQgY29udGFpbmVySGVpZ2h0ID0gdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICBsZXQgaW1nTmF0dXJhbFdpZHRoID0gdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQubmF0dXJhbFdpZHRoO1xuICAgICAgbGV0IGltZ05hdHVyYWxIZWlnaHQgPSB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5uYXR1cmFsSGVpZ2h0O1xuICAgICAgdGhpcy5pbWdSYXRpbyA9IGltZ05hdHVyYWxXaWR0aCAvIGltZ05hdHVyYWxIZWlnaHQ7XG4gIFxuICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gMDtcbiAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9IFwiaW1hZ2VcIjtcbiAgXG4gICAgICBpZih0aGlzLmltZ1JhdGlvIDwgY29udGFpbmVyV2lkdGggLyBjb250YWluZXJIZWlnaHQpe1xuICAgICAgICBsZXQgaW1nV2lkdGggPSBjb250YWluZXJIZWlnaHQgLyBpbWdOYXR1cmFsSGVpZ2h0ICogaW1nTmF0dXJhbFdpZHRoO1xuICAgICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IGltZ1dpZHRoICsgJ3B4JztcbiAgICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY29udGFpbmVySGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IChjb250YWluZXJXaWR0aCAtIGltZ1dpZHRoKS8yICsncHgnO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBpbWdIZWlnaHQgPSBjb250YWluZXJXaWR0aCAvIGltZ05hdHVyYWxXaWR0aCAqIGltZ05hdHVyYWxIZWlnaHQ7XG4gICAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gY29udGFpbmVyV2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBpbWdIZWlnaHQgKyAncHgnO1xuICAgICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSAoY29udGFpbmVySGVpZ2h0IC0gaW1nSGVpZ2h0KS8yICsncHgnO1xuICAgICAgfVxuICBcbiAgICAgIHRoaXMuaXNTcGlubmluZyA9IGZhbHNlO1xuICAgIH1cbiAgXG4gICAgcHJldigpIHtcbiAgICAgIGlmKHRoaXMubm93SW1nSW5kZXg+MCkge1xuICAgICAgICB0aGlzLmlzU3Bpbm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vd0ltZ0luZGV4LS07XG4gICAgICAgIHRoaXMubm93SW1nVXJsID0gdGhpcy5pbWdMaXN0W3RoaXMubm93SW1nSW5kZXhdLnVybDtcbiAgICAgICAgdGhpcy5zblBhZ2VCdG5DbGljay5lbWl0KHRoaXMubm93SW1nSW5kZXgpO1xuICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRJbWdTaXplKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgbmV4dCgpIHtcbiAgICAgIGlmKHRoaXMubm93SW1nSW5kZXg8dGhpcy5pbWdMaXN0Lmxlbmd0aC0xKSB7XG4gICAgICAgIHRoaXMuaXNTcGlubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubm93SW1nSW5kZXgrKztcbiAgICAgICAgdGhpcy5ub3dJbWdVcmwgPSB0aGlzLmltZ0xpc3RbdGhpcy5ub3dJbWdJbmRleF0udXJsO1xuICAgICAgICB0aGlzLnNuUGFnZUJ0bkNsaWNrLmVtaXQodGhpcy5ub3dJbWdJbmRleCk7XG4gIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldEltZ1NpemUoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICB6b29tKCkge1xuICAgICAgbGV0IG5ld0ltZ1dpZHRoID0gTWF0aC5jZWlsKHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoICogdGhpcy56b29tUmF0aW8pO1xuICAgICAgbGV0IG5ld0ltZ0hlaWdodCA9IE1hdGguY2VpbCh0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgKiB0aGlzLnpvb21SYXRpbyk7XG4gIFxuICAgICAgdGhpcy51cGRhdGVJbWdTaXplKCd6b29tJywgbmV3SW1nV2lkdGgsIG5ld0ltZ0hlaWdodCk7XG4gICAgfVxuICBcbiAgICB6b29tT3V0KCkge1xuICAgICAgbGV0IG5ld0ltZ1dpZHRoID0gTWF0aC5jZWlsKHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIC8gdGhpcy56b29tUmF0aW8pO1xuICAgICAgbGV0IG5ld0ltZ0hlaWdodCA9IE1hdGguY2VpbCh0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLyB0aGlzLnpvb21SYXRpbyk7XG4gIFxuICAgICAgdGhpcy51cGRhdGVJbWdTaXplKCd6b29tb3V0JywgbmV3SW1nV2lkdGgsIG5ld0ltZ0hlaWdodCk7XG4gICAgfVxuICBcbiAgICByb3RhdGUoKSB7XG4gICAgICBsZXQgcm90YXRlQ2xhc3MgPSB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5jbGFzc05hbWUubWF0Y2goLyhyb3RhdGUpKFxcZCopLyk7XG4gICAgICBpZihyb3RhdGVDbGFzcyl7XG4gICAgICAgIHRoaXMubmV4dERlZyA9IChyb3RhdGVDbGFzc1syXSAqIDEgKyA5MCkgJSAzNjA7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5uZXh0RGVnID0gOTA7XG4gICAgICB9XG4gICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSBcImltYWdlIHJvdGF0ZVwiICsgdGhpcy5uZXh0RGVnO1xuICBcbiAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSAodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAtIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoKSAvIDIgKyAncHgnO1xuICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0KSAvIDIgKyAncHgnO1xuICAgIH1cbiAgXG4gICAgdXBkYXRlSW1nU2l6ZSh0eXBlLCBuZXdJbWdXaWR0aCwgbmV3SW1nSGVpZ2h0KSB7XG4gICAgICBsZXQgY29udGFpbmVyV2lkdGggPSB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgbGV0IGNvbnRhaW5lckhlaWdodCA9IHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIC8vICAgbGV0IGlzVmVydGljYWwgPSB0aGlzLm5leHREZWcgPT0gOTAgfHwgdGhpcy5uZXh0RGVnID09IDI3MDtcbiAgICAgIGxldCBpc1ZlcnRpY2FsID0gdHJ1ZTtcbiAgXG4gICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IG5ld0ltZ1dpZHRoICsgJ3B4JztcbiAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IG5ld0ltZ0hlaWdodCArICdweCc7XG4gIFxuICAgICAgaWYgKGNvbnRhaW5lcldpZHRoID4gaXNWZXJ0aWNhbCA/IG5ld0ltZ1dpZHRoIDogbmV3SW1nSGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSAoY29udGFpbmVyV2lkdGggLSBuZXdJbWdXaWR0aCkgLyAyICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpTCA9IHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCArIG5ld0ltZ1dpZHRoIC8gMTAgKiAodHlwZSA9PT0gJ3pvb20nID8gLTEgOiAxKTtcbiAgICAgICAgbGV0IGlSID0gY29udGFpbmVyV2lkdGggLSBuZXdJbWdXaWR0aDtcbiAgXG4gICAgICAgIGlMID49IDAgJiYgKGlMID0gMCk7XG4gICAgICAgIGlMIDw9IGlSICYmIChpTCA9IGlSKVxuICBcbiAgICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IGlMICsgJ3B4JztcbiAgICAgIH1cbiAgICAgIGlmIChjb250YWluZXJIZWlnaHQgPiBpc1ZlcnRpY2FsID8gbmV3SW1nSGVpZ2h0IDogbmV3SW1nV2lkdGgpIHtcbiAgICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gKGNvbnRhaW5lckhlaWdodCAtIG5ld0ltZ0hlaWdodCkgLyAyICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpVCA9IHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQgKyBuZXdJbWdIZWlnaHQgLyAxMCAqICh0eXBlID09PSAnem9vbScgPyAtMSA6IDEpO1xuICAgICAgICBsZXQgaUIgPSBjb250YWluZXJIZWlnaHQgLSBuZXdJbWdIZWlnaHQ7XG4gIFxuICAgICAgICBpVCA+PSAwICYmIChpVCA9IDApO1xuICAgICAgICBpVCA8PSBpQiAmJiAoaVQgPSBpQilcbiAgICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gaVQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfSAgXG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZ2lzY2FmZXIgb24gMjAxNy8wOS8yMS5cbiAqIMOlwp/CusOkwrrCjnZpZXdlci5qc8OlwrDCgcOowqPChVxuICovXG5pbXBvcnQge1xuICAgIENvbnRlbnRDaGlsZCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBSZW5kZXJlcjJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcblxuZGVjbGFyZSB2YXIgVmlld2VyO1xuXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3ZpZXdlci1jb250ZW50XScsXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlckNvbnRlbnREaXJlY3RpdmUge1xuXG4gICAgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t2aWV3ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBWaWV3ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KClcbiAgICBvcmlnaW5hbEF0dHI6IHN0cmluZyA9IFwibmFtZVwiO1xuICAgIEBDb250ZW50Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50OiBFbGVtZW50UmVmO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihWaWV3ZXJDb250ZW50RGlyZWN0aXZlKVxuICAgIHNldCBfaW1nQ29udGVudHModmFsdWUpIHtcbiAgICAgICAgdGhpcy5pbWdDb250ZW50cyA9IHZhbHVlO1xuICAgICAgICB0aGlzLnJlbmRlckNvbnRlbnQodHJ1ZSk7XG4gICAgfVxuXG4gICAgdmlld2VyOiBhbnk7XG4gICAgaW1nQ29udGVudHM7XG4gICAgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIF9yZW5kZXI6IFJlbmRlcmVyMikge1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ29udGVudChmbGFnPzogYm9vbGVhbikge1xuICAgICAgICBsZXQgbmF0aXZlRWwgPSB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIG5hdGl2ZUVsID0gdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW1ncyA9IG5hdGl2ZUVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKTtcbiAgICAgICAgICAgIGlmIChpbWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpZXdlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdlci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmICghZmxhZykge1xuICAgICAgICAgICAgICAgIC8vICAgaW1nc1swXS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudmlld2VyID0gbmV3IFZpZXdlcih0aGlzLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICB1cmw6IHRoaXMub3JpZ2luYWxBdHRyLFxuICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgaW1nc1tpbWdzLmxlbmd0aC0xXS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudmlld2VyID0gbmV3IFZpZXdlcih0aGlzLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICB1cmw6IHRoaXMub3JpZ2luYWxBdHRyLFxuICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3ZXIgPSBuZXcgVmlld2VyKHRoaXMubmF0aXZlRWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMub3JpZ2luYWxBdHRyLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy52aWV3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudmlld2VyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVmlld2VyRGlyZWN0aXZlLCBWaWV3ZXJDb250ZW50RGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbVmlld2VyRGlyZWN0aXZlLCBWaWV3ZXJDb250ZW50RGlyZWN0aXZlXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBWaWV3ZXJEaXJlY3RpdmVNb2R1bGUge1xufSIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuaW1wb3J0IHsgUG9wUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4vcG9wLXByZXZpZXcvcG9wLXByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLXByZXZpZXcvcGFnZS1wcmV2aWV3LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFZpZXdlckRpcmVjdGl2ZU1vZHVsZSB9IGZyb20gJy4vcG9wLXByZXZpZXcvcG9wLXByZXZpZXcuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOZ1pvcnJvQW50ZE1vZHVsZSxcbiAgICBWaWV3ZXJEaXJlY3RpdmVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUG9wUHJldmlld0NvbXBvbmVudCwgUGFnZVByZXZpZXdDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUG9wUHJldmlld0NvbXBvbmVudCwgUGFnZVByZXZpZXdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5lUHJldmlld01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBp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