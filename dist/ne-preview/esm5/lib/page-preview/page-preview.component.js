/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
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
    ;
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
export { PagePreviewComponent };
if (false) {
    /** @type {?} */
    PagePreviewComponent.prototype.focusElement;
    /** @type {?} */
    PagePreviewComponent.prototype.zoomRatio;
    /** @type {?} */
    PagePreviewComponent.prototype.imgRatio;
    /** @type {?} */
    PagePreviewComponent.prototype.isSpinning;
    /** @type {?} */
    PagePreviewComponent.prototype.mouseDown;
    /** @type {?} */
    PagePreviewComponent.prototype.disX;
    /** @type {?} */
    PagePreviewComponent.prototype.disY;
    /** @type {?} */
    PagePreviewComponent.prototype.nextDeg;
    /** @type {?} */
    PagePreviewComponent.prototype.nowImgUrl;
    /** @type {?} */
    PagePreviewComponent.prototype.nowImgIndex;
    /** @type {?} */
    PagePreviewComponent.prototype.imgList;
    /** @type {?} */
    PagePreviewComponent.prototype.snHeight;
    /** @type {?} */
    PagePreviewComponent.prototype.snPageBtnClick;
    /** @type {?} */
    PagePreviewComponent.prototype.container;
    /** @type {?} */
    PagePreviewComponent.prototype.imageInstance;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1wcmV2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25lLWltZy1wcmV2aWV3LyIsInNvdXJjZXMiOlsibGliL3BhZ2UtcHJldmlldy9wYWdlLXByZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQXNDaEg7eUJBVm9CLEdBQUc7MEJBRUQsS0FBSzt5QkFDTixLQUFLO29CQUNYLENBQUM7b0JBQ0QsQ0FBQzt1QkFDRSxDQUFDOzJCQUVHLENBQUM7OEJBTUksSUFBSSxZQUFZLEVBQVU7S0FKcEM7Ozs7SUFTakIsdUNBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkIsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNWOzs7OztJQUdELDBDQUFXOzs7O0lBRFgsVUFDWSxLQUFpQjtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNyRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFD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QUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUE7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1NBQ3hEO0tBQ0Y7O2dCQW5OSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGcrQkFnQlg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsMDBEQUEwMEQsQ0FBQztpQkFDcjFEOzs7OzswQkFnQkksS0FBSzsyQkFDTCxLQUFLO2lDQUNMLE1BQU07NEJBRU4sU0FBUyxTQUFDLFdBQVc7Z0NBQ3JCLFNBQVMsU0FBQyxlQUFlOzhCQVV6QixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzhCQWFwQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQWNwQyxZQUFZLFNBQUMsZ0JBQWdCOzZCQVE3QixZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDOzsrQkExRjFDOztTQXlCYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJTUdMSVNUIH0gZnJvbSAnLi4vbW9kZWwvbmUtcHJldmlldy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25lLXBhZ2UtcHJldmlldycsXG4gIHRlbXBsYXRlOiBgPG56LXNwaW4gW256U3Bpbm5pbmddPVwiaXNTcGlubmluZ1wiPlxuICA8ZGl2IGNsYXNzPVwiYm94XCIgW25nU3R5bGVdPVwieydoZWlnaHQnOiBzbkhlaWdodH1cIj5cbiAgICA8ZGl2ICNjb250YWluZXIgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxpbWcgI2ltYWdlSW5zdGFuY2UgY2xhc3M9XCJpbWFnZSByb3RhdGUwXCIgW3NyY109XCJub3dJbWdVcmxcIiAvPlxuICAgICAgPGRpdiAoY2xpY2spPVwicHJldigpXCIgY2xhc3M9XCJwYWdlVHVyblNwYW4gcHJldlwiPjxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWxlZnRcIj48L2k+PC9kaXY+XG4gICAgICA8ZGl2IChjbGljayk9XCJuZXh0KClcIiBjbGFzcz1cInBhZ2VUdXJuU3BhbiBuZXh0XCI+PGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcmlnaHRcIj48L2k+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9vbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbGN0XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJvcGVyX2JpZ2dlclwiIHRpdGxlPVwi5pS+5aSn5Zu+54mHXCIgKGNsaWNrKT1cInpvb20oKVwiPjxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXBsdXMtY2lyY2xlLW9cIj48L2k+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwib3Blcl9zbWFsbGVyXCIgdGl0bGU9XCLnvKnlsI/lm77niYdcIiAoY2xpY2spPVwiem9vbU91dCgpXCI+PGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24tbWludXMtY2lyY2xlLW9cIj48L2k+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwib3Blcl9yb3RhdGVcIiB0aXRsZT1cIuWQkeWPs+aXi+i9rFwiIChjbGljayk9XCJyb3RhdGUoKVwiPjxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXJlbG9hZFwiPjwvaT48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uei1zcGluPlxuYCxcbiAgc3R5bGVzOiBbYC5ib3h7d2lkdGg6MTAwJTtoZWlnaHQ6NDAwcHg7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNSk7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVufS5ib3ggaXtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4Ojk5OTk5O2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5ib3ggLnJvdGF0ZTB7dHJhbnNmb3JtOnJvdGF0ZSgwKTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCl9LmJveCAucm90YXRlOTB7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0uYm94IC5yb3RhdGUxODB7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS5ib3ggLnJvdGF0ZTI3MHt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9LmJveCAuY29udGFpbmVyOmhvdmVyIC5wYWdlVHVyblNwYW4sLmJveCAuY29udGFpbmVyOmhvdmVyIC50b29se2Rpc3BsYXk6YmxvY2t9LmJveCAuY29udGFpbmVye3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xKX0uYm94IC5jb250YWluZXIgLmltYWdle3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbjowO3BhZGRpbmc6MDt6LWluZGV4Ojk5OTtjdXJzb3I6bW92ZX0uYm94IC5jb250YWluZXIgLmltYWdlLmFjdGl2ZXtkaXNwbGF5OmJsb2NrfS5ib3ggLmNvbnRhaW5lciAudG9vbHtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206NHB4O3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7ZGlzcGxheTpub25lO3otaW5kZXg6OTk5OTl9LmJveCAuY29udGFpbmVyIC50b29sY3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjMwcHg7YmFja2dyb3VuZC1jb2xvcjojNmY2OTY1O3BhZGRpbmc6NXB4IDE0cHg7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlci1yYWRpdXM6NnB4fS5ib3ggLmNvbnRhaW5lciAudG9vbGN0IHNwYW57bWFyZ2luOjAgMTBweH0uYm94IC5jb250YWluZXIgLnRvb2xjdCBpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO2N1cnNvcjpwb2ludGVyfS5ib3ggLmNvbnRhaW5lciAucGVyY2VudFRpcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtyaWdodDowO2xlZnQ6MDttYXJnaW46YXV0bzt3aWR0aDoxMDBweDtoZWlnaHQ6MzBweDt6LWluZGV4Ojk5OTk7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MzBweDtmb250LXNpemU6MTZweDtib3JkZXItcmFkaXVzOjhweDtjb2xvcjojZmZmO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDMxNWRlZywjNGY1MDRlLCMxNTEzMTMpO2JhY2tncm91bmQ6LW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIzRmNTA0ZSwjMTUxMzEzKTtiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLDEwMCUgMCwxMDAlIDAsZnJvbSgjNGY1MDRlKSx0bygjMTUxMzEzKSl9LmJveCAuY29udGFpbmVyIC5wYWdlVHVyblNwYW57cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7cmlnaHQ6MDtsZWZ0OjA7bWFyZ2luOmF1dG87ei1pbmRleDo5OTk5OTtkaXNwbGF5Om5vbmU7d2lkdGg6MzBweDtoZWlnaHQ6MzhweDtmb250LXNpemU6MzBweDtsaW5lLWhlaWdodDozOHB4O2N1cnNvcjpwb2ludGVyfS5ib3ggLmNvbnRhaW5lciAucGFnZVR1cm5TcGFuLnByZXZ7ZmxvYXQ6bGVmdDttYXJnaW4tbGVmdDo5cHh9LmJveCAuY29udGFpbmVyIC5wYWdlVHVyblNwYW4ubmV4dHtmbG9hdDpyaWdodDttYXJnaW4tcmlnaHQ6OXB4fS5ib3ggLmNvbnRhaW5lciAucGFnZVR1cm5TcGFuLm5leHQuYWN0aXZlIGksLmJveCAuY29udGFpbmVyIC5wYWdlVHVyblNwYW4ucHJldi5hY3RpdmUgaXtkaXNwbGF5OmlubGluZS1ibG9ja31gXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlUHJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBmb2N1c0VsZW1lbnQ6IGFueTtcbiAgICB6b29tUmF0aW86IG51bWJlciA9IDEuMjtcbiAgICBpbWdSYXRpbzogbnVtYmVyO1xuICAgIGlzU3Bpbm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBtb3VzZURvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBkaXNYOiBudW1iZXIgPSAwO1xuICAgIGRpc1k6IG51bWJlciA9IDA7XG4gICAgbmV4dERlZzogbnVtYmVyID0gMFxuICAgIG5vd0ltZ1VybDogc3RyaW5nO1xuICAgIG5vd0ltZ0luZGV4OiBudW1iZXIgPSAwO1xuICBcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgQElucHV0KCkgaW1nTGlzdDogSU1HTElTVFtdO1xuICAgIEBJbnB1dCgpIHNuSGVpZ2h0Pzogc3RyaW5nO1xuICAgIEBPdXRwdXQoKSBzblBhZ2VCdG5DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBcbiAgICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwiaW1hZ2VJbnN0YW5jZVwiKSBpbWFnZUluc3RhbmNlOiBFbGVtZW50UmVmO1xuICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMubm93SW1nVXJsID0gdGhpcy5pbWdMaXN0W3RoaXMubm93SW1nSW5kZXhdLnVybDtcbiAgICAgIHRoaXMuaXNTcGlubmluZyA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRJbWdTaXplKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIFxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7Ly/npoHmraLmtY/op4jlmajoh6rluKbmi5bliqjmlYjmnpxcbiAgICAgICAgdGhpcy5mb2N1c0VsZW1lbnQgPSB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5kaXNYID0gZXZlbnQuY2xpZW50WCAtIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICAgIHRoaXMuZGlzWSA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnNldENhcHR1cmUgJiYgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc2V0Q2FwdHVyZS5zZXRDYXB0dXJlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZW1vdmUnLCBbJyRldmVudCddKVxuICAgIG9uTW91c2Vtb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNFbGVtZW50ID09IHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgbGV0IGlMID0gZXZlbnQuY2xpZW50WCAtIHRoaXMuZGlzWDtcbiAgICAgICAgICBsZXQgaVQgPSBldmVudC5jbGllbnRZIC0gdGhpcy5kaXNZO1xuICBcbiAgICAgICAgICAvLyBpTCA8PSAwICYmIChpTCA9IDApO1xuICAgICAgICAgIC8vIGlMID4gbWF4VyAmJiAoaUwgPSBtYXhXKTtcbiAgICAgICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gaUwgKyBcInB4XCI7XG4gICAgICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gaVQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93Om1vdXNldXAnKVxuICAgIG9uTW91c2V1cCgpIHtcbiAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICB0aGlzLmZvY3VzRWxlbWVudCA9IG51bGw7XG4gICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQucmVsZWFzZUNhcHR1cmUgJiYgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQucmVsZWFzZUNhcHR1cmUoKTtcbiAgICB9O1xuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIFtcIiRldmVudFwiXSlcbiAgICBtb3VzZXdoZWVsKGV2ZW50OiBNb3VzZUV2ZW50IHwgYW55KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdXNld2hlZWxcIiwgZXZlbnQpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOy8v56aB5q2i5rWP6KeI5Zmo6Ieq5bim5ouW5Yqo5pWI5p6cXG4gICAgICAgIFxuICAgICAgICBpZihldmVudC53aGVlbERlbHRhID4gMCl7XG4gICAgICAgICAgY29uc29sZS5sb2coXCI+MFwiLCBldmVudC53aGVlbERlbHRhKTtcbiAgICAgICAgICB0aGlzLnpvb20oKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgY29uc29sZS5sb2coXCI8MFwiLCBldmVudC53aGVlbERlbHRhKTtcbiAgICAgICAgICB0aGlzLnpvb21PdXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zZXRDYXB0dXJlICYmIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnNldENhcHR1cmUuc2V0Q2FwdHVyZSgpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgc2V0SW1nU2l6ZSgpIHtcbiAgICAgIGxldCBjb250YWluZXJXaWR0aCA9IHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICBsZXQgY29udGFpbmVySGVpZ2h0ID0gdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICBsZXQgaW1nTmF0dXJhbFdpZHRoID0gdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQubmF0dXJhbFdpZHRoO1xuICAgICAgbGV0IGltZ05hdHVyYWxIZWlnaHQgPSB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5uYXR1cmFsSGVpZ2h0O1xuICAgICAgdGhpcy5pbWdSYXRpbyA9IGltZ05hdHVyYWxXaWR0aCAvIGltZ05hdHVyYWxIZWlnaHQ7XG4gIFxuICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gMDtcbiAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9IFwiaW1hZ2VcIjtcbiAgXG4gICAgICBpZih0aGlzLmltZ1JhdGlvIDwgY29udGFpbmVyV2lkdGggLyBjb250YWluZXJIZWlnaHQpe1xuICAgICAgICBsZXQgaW1nV2lkdGggPSBjb250YWluZXJIZWlnaHQgLyBpbWdOYXR1cmFsSGVpZ2h0ICogaW1nTmF0dXJhbFdpZHRoO1xuICAgICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IGltZ1dpZHRoICsgJ3B4JztcbiAgICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY29udGFpbmVySGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IChjb250YWluZXJXaWR0aCAtIGltZ1dpZHRoKS8yICsncHgnO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBpbWdIZWlnaHQgPSBjb250YWluZXJXaWR0aCAvIGltZ05hdHVyYWxXaWR0aCAqIGltZ05hdHVyYWxIZWlnaHQ7XG4gICAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gY29udGFpbmVyV2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBpbWdIZWlnaHQgKyAncHgnO1xuICAgICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSAoY29udGFpbmVySGVpZ2h0IC0gaW1nSGVpZ2h0KS8yICsncHgnO1xuICAgICAgfVxuICBcbiAgICAgIHRoaXMuaXNTcGlubmluZyA9IGZhbHNlO1xuICAgIH1cbiAgXG4gICAgcHJldigpIHtcbiAgICAgIGlmKHRoaXMubm93SW1nSW5kZXg+MCkge1xuICAgICAgICB0aGlzLmlzU3Bpbm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vd0ltZ0luZGV4LS07XG4gICAgICAgIHRoaXMubm93SW1nVXJsID0gdGhpcy5pbWdMaXN0W3RoaXMubm93SW1nSW5kZXhdLnVybDtcbiAgICAgICAgdGhpcy5zblBhZ2VCdG5DbGljay5lbWl0KHRoaXMubm93SW1nSW5kZXgpO1xuICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRJbWdTaXplKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgbmV4dCgpIHtcbiAgICAgIGlmKHRoaXMubm93SW1nSW5kZXg8dGhpcy5pbWdMaXN0Lmxlbmd0aC0xKSB7XG4gICAgICAgIHRoaXMuaXNTcGlubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubm93SW1nSW5kZXgrKztcbiAgICAgICAgdGhpcy5ub3dJbWdVcmwgPSB0aGlzLmltZ0xpc3RbdGhpcy5ub3dJbWdJbmRleF0udXJsO1xuICAgICAgICB0aGlzLnNuUGFnZUJ0bkNsaWNrLmVtaXQodGhpcy5ub3dJbWdJbmRleCk7XG4gIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldEltZ1NpemUoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICB6b29tKCkge1xuICAgICAgbGV0IG5ld0ltZ1dpZHRoID0gTWF0aC5jZWlsKHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoICogdGhpcy56b29tUmF0aW8pO1xuICAgICAgbGV0IG5ld0ltZ0hlaWdodCA9IE1hdGguY2VpbCh0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgKiB0aGlzLnpvb21SYXRpbyk7XG4gIFxuICAgICAgdGhpcy51cGRhdGVJbWdTaXplKCd6b29tJywgbmV3SW1nV2lkdGgsIG5ld0ltZ0hlaWdodCk7XG4gICAgfVxuICBcbiAgICB6b29tT3V0KCkge1xuICAgICAgbGV0IG5ld0ltZ1dpZHRoID0gTWF0aC5jZWlsKHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIC8gdGhpcy56b29tUmF0aW8pO1xuICAgICAgbGV0IG5ld0ltZ0hlaWdodCA9IE1hdGguY2VpbCh0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLyB0aGlzLnpvb21SYXRpbyk7XG4gIFxuICAgICAgdGhpcy51cGRhdGVJbWdTaXplKCd6b29tb3V0JywgbmV3SW1nV2lkdGgsIG5ld0ltZ0hlaWdodCk7XG4gICAgfVxuICBcbiAgICByb3RhdGUoKSB7XG4gICAgICBsZXQgcm90YXRlQ2xhc3MgPSB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5jbGFzc05hbWUubWF0Y2goLyhyb3RhdGUpKFxcZCopLyk7XG4gICAgICBpZihyb3RhdGVDbGFzcyl7XG4gICAgICAgIHRoaXMubmV4dERlZyA9IChyb3RhdGVDbGFzc1syXSAqIDEgKyA5MCkgJSAzNjA7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5uZXh0RGVnID0gOTA7XG4gICAgICB9XG4gICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSBcImltYWdlIHJvdGF0ZVwiICsgdGhpcy5uZXh0RGVnO1xuICBcbiAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSAodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAtIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoKSAvIDIgKyAncHgnO1xuICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0KSAvIDIgKyAncHgnO1xuICAgIH1cbiAgXG4gICAgdXBkYXRlSW1nU2l6ZSh0eXBlLCBuZXdJbWdXaWR0aCwgbmV3SW1nSGVpZ2h0KSB7XG4gICAgICBsZXQgY29udGFpbmVyV2lkdGggPSB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgbGV0IGNvbnRhaW5lckhlaWdodCA9IHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIC8vICAgbGV0IGlzVmVydGljYWwgPSB0aGlzLm5leHREZWcgPT0gOTAgfHwgdGhpcy5uZXh0RGVnID09IDI3MDtcbiAgICAgIGxldCBpc1ZlcnRpY2FsID0gdHJ1ZTtcbiAgXG4gICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IG5ld0ltZ1dpZHRoICsgJ3B4JztcbiAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IG5ld0ltZ0hlaWdodCArICdweCc7XG4gIFxuICAgICAgaWYgKGNvbnRhaW5lcldpZHRoID4gaXNWZXJ0aWNhbCA/IG5ld0ltZ1dpZHRoIDogbmV3SW1nSGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSAoY29udGFpbmVyV2lkdGggLSBuZXdJbWdXaWR0aCkgLyAyICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpTCA9IHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCArIG5ld0ltZ1dpZHRoIC8gMTAgKiAodHlwZSA9PT0gJ3pvb20nID8gLTEgOiAxKTtcbiAgICAgICAgbGV0IGlSID0gY29udGFpbmVyV2lkdGggLSBuZXdJbWdXaWR0aDtcbiAgXG4gICAgICAgIGlMID49IDAgJiYgKGlMID0gMCk7XG4gICAgICAgIGlMIDw9IGlSICYmIChpTCA9IGlSKVxuICBcbiAgICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IGlMICsgJ3B4JztcbiAgICAgIH1cbiAgICAgIGlmIChjb250YWluZXJIZWlnaHQgPiBpc1ZlcnRpY2FsID8gbmV3SW1nSGVpZ2h0IDogbmV3SW1nV2lkdGgpIHtcbiAgICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gKGNvbnRhaW5lckhlaWdodCAtIG5ld0ltZ0hlaWdodCkgLyAyICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpVCA9IHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQgKyBuZXdJbWdIZWlnaHQgLyAxMCAqICh0eXBlID09PSAnem9vbScgPyAtMSA6IDEpO1xuICAgICAgICBsZXQgaUIgPSBjb250YWluZXJIZWlnaHQgLSBuZXdJbWdIZWlnaHQ7XG4gIFxuICAgICAgICBpVCA+PSAwICYmIChpVCA9IDApO1xuICAgICAgICBpVCA8PSBpQiAmJiAoaVQgPSBpQilcbiAgICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gaVQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfSAgXG59XG4iXX0=