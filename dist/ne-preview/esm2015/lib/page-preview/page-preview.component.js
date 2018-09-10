/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
export class PagePreviewComponent {
    constructor() {
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
    ngOnInit() {
        this.nowImgUrl = this.imgList[this.nowImgIndex].url;
        this.isSpinning = true;
        setTimeout(() => {
            this.setImgSize();
        }, 1000);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousemove(event) {
        if (this.mouseDown) {
            if (this.focusElement == this.imageInstance.nativeElement) {
                /** @type {?} */
                let iL = event.clientX - this.disX;
                /** @type {?} */
                let iT = event.clientY - this.disY;
                // iL <= 0 && (iL = 0);
                // iL > maxW && (iL = maxW);
                this.imageInstance.nativeElement.style.left = iL + "px";
                this.imageInstance.nativeElement.style.top = iT + "px";
            }
        }
    }
    /**
     * @return {?}
     */
    onMouseup() {
        this.mouseDown = false;
        this.focusElement = null;
        document.onmousemove = null;
        document.onmouseup = null;
        this.imageInstance.nativeElement.releaseCapture && this.imageInstance.nativeElement.releaseCapture();
    }
    ;
    /**
     * @param {?} event
     * @return {?}
     */
    mousewheel(event) {
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
    }
    /**
     * @return {?}
     */
    setImgSize() {
        /** @type {?} */
        let containerWidth = this.container.nativeElement.clientWidth;
        /** @type {?} */
        let containerHeight = this.container.nativeElement.clientHeight;
        /** @type {?} */
        let imgNaturalWidth = this.imageInstance.nativeElement.naturalWidth;
        /** @type {?} */
        let imgNaturalHeight = this.imageInstance.nativeElement.naturalHeight;
        this.imgRatio = imgNaturalWidth / imgNaturalHeight;
        this.imageInstance.nativeElement.style.top = 0;
        this.imageInstance.nativeElement.className = "image";
        if (this.imgRatio < containerWidth / containerHeight) {
            /** @type {?} */
            let imgWidth = containerHeight / imgNaturalHeight * imgNaturalWidth;
            this.imageInstance.nativeElement.style.width = imgWidth + 'px';
            this.imageInstance.nativeElement.style.height = containerHeight + 'px';
            this.imageInstance.nativeElement.style.left = (containerWidth - imgWidth) / 2 + 'px';
        }
        else {
            /** @type {?} */
            let imgHeight = containerWidth / imgNaturalWidth * imgNaturalHeight;
            this.imageInstance.nativeElement.style.width = containerWidth + 'px';
            this.imageInstance.nativeElement.style.height = imgHeight + 'px';
            this.imageInstance.nativeElement.style.top = (containerHeight - imgHeight) / 2 + 'px';
        }
        this.isSpinning = false;
    }
    /**
     * @return {?}
     */
    prev() {
        if (this.nowImgIndex > 0) {
            this.isSpinning = true;
            this.nowImgIndex--;
            this.nowImgUrl = this.imgList[this.nowImgIndex].url;
            this.snPageBtnClick.emit(this.nowImgIndex);
            setTimeout(() => {
                this.setImgSize();
            }, 1000);
        }
    }
    /**
     * @return {?}
     */
    next() {
        if (this.nowImgIndex < this.imgList.length - 1) {
            this.isSpinning = true;
            this.nowImgIndex++;
            this.nowImgUrl = this.imgList[this.nowImgIndex].url;
            this.snPageBtnClick.emit(this.nowImgIndex);
            setTimeout(() => {
                this.setImgSize();
            }, 1000);
        }
    }
    /**
     * @return {?}
     */
    zoom() {
        /** @type {?} */
        let newImgWidth = Math.ceil(this.imageInstance.nativeElement.clientWidth * this.zoomRatio);
        /** @type {?} */
        let newImgHeight = Math.ceil(this.imageInstance.nativeElement.clientHeight * this.zoomRatio);
        this.updateImgSize('zoom', newImgWidth, newImgHeight);
    }
    /**
     * @return {?}
     */
    zoomOut() {
        /** @type {?} */
        let newImgWidth = Math.ceil(this.imageInstance.nativeElement.clientWidth / this.zoomRatio);
        /** @type {?} */
        let newImgHeight = Math.ceil(this.imageInstance.nativeElement.clientHeight / this.zoomRatio);
        this.updateImgSize('zoomout', newImgWidth, newImgHeight);
    }
    /**
     * @return {?}
     */
    rotate() {
        /** @type {?} */
        let rotateClass = this.imageInstance.nativeElement.className.match(/(rotate)(\d*)/);
        if (rotateClass) {
            this.nextDeg = (rotateClass[2] * 1 + 90) % 360;
        }
        else {
            this.nextDeg = 90;
        }
        this.imageInstance.nativeElement.className = "image rotate" + this.nextDeg;
        this.imageInstance.nativeElement.style.left = (this.container.nativeElement.clientWidth - this.imageInstance.nativeElement.clientWidth) / 2 + 'px';
        this.imageInstance.nativeElement.style.top = (this.container.nativeElement.clientHeight - this.imageInstance.nativeElement.clientHeight) / 2 + 'px';
    }
    /**
     * @param {?} type
     * @param {?} newImgWidth
     * @param {?} newImgHeight
     * @return {?}
     */
    updateImgSize(type, newImgWidth, newImgHeight) {
        /** @type {?} */
        let containerWidth = this.container.nativeElement.clientWidth;
        /** @type {?} */
        let containerHeight = this.container.nativeElement.clientHeight;
        /** @type {?} */
        let isVertical = true;
        this.imageInstance.nativeElement.style.width = newImgWidth + 'px';
        this.imageInstance.nativeElement.style.height = newImgHeight + 'px';
        if (containerWidth > isVertical ? newImgWidth : newImgHeight) {
            this.imageInstance.nativeElement.style.left = (containerWidth - newImgWidth) / 2 + 'px';
        }
        else {
            /** @type {?} */
            let iL = this.imageInstance.nativeElement.offsetTop + newImgWidth / 10 * (type === 'zoom' ? -1 : 1);
            /** @type {?} */
            let iR = containerWidth - newImgWidth;
            iL >= 0 && (iL = 0);
            iL <= iR && (iL = iR);
            this.imageInstance.nativeElement.style.left = iL + 'px';
        }
        if (containerHeight > isVertical ? newImgHeight : newImgWidth) {
            this.imageInstance.nativeElement.style.top = (containerHeight - newImgHeight) / 2 + 'px';
        }
        else {
            /** @type {?} */
            let iT = this.imageInstance.nativeElement.offsetLeft + newImgHeight / 10 * (type === 'zoom' ? -1 : 1);
            /** @type {?} */
            let iB = containerHeight - newImgHeight;
            iT >= 0 && (iT = 0);
            iT <= iB && (iT = iB);
            this.imageInstance.nativeElement.style.top = iT + "px";
        }
    }
}
PagePreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'ne-page-preview',
                template: `<nz-spin [nzSpinning]="isSpinning">
  <div class="box" [ngStyle]="{'height': snHeight}">
    <div #container class="container">
      <img #imageInstance class="image rotate0" [src]="nowImgUrl" />
      <div (click)="prev()" class="pageTurnSpan prev"><i class="anticon anticon-left"></i></div>
      <div (click)="next()" class="pageTurnSpan next"><i class="anticon anticon-right"></i></div>
      <div class="tool">
        <div class="toolct">
          <span class="oper_bigger" title="放大图片" (click)="zoom()"><i class="anticon anticon-plus-circle-o"></i></span>
          <span class="oper_smaller" title="缩小图片" (click)="zoomOut()"><i class="anticon anticon-minus-circle-o"></i></span>
          <span class="oper_rotate" title="向右旋转" (click)="rotate()"><i class="anticon anticon-reload"></i></span>
        </div>
      </div>
    </div>
  </div>
</nz-spin>
`,
                styles: [`.box{width:100%;height:400px;border:1px solid rgba(0,0,0,.15);position:relative;overflow:hidden}.box i{position:relative;z-index:99999;display:inline-block}.box .rotate0{transform:rotate(0);-webkit-transform:rotate(0)}.box .rotate90{transform:rotate(90deg);-webkit-transform:rotate(90deg)}.box .rotate180{transform:rotate(180deg);-webkit-transform:rotate(180deg)}.box .rotate270{transform:rotate(270deg);-webkit-transform:rotate(270deg)}.box .container:hover .pageTurnSpan,.box .container:hover .tool{display:block}.box .container{width:100%;height:100%;background:rgba(0,0,0,.1)}.box .container .image{position:absolute;margin:0;padding:0;z-index:999;cursor:move}.box .container .image.active{display:block}.box .container .tool{position:absolute;bottom:4px;width:100%;text-align:center;display:none;z-index:99999}.box .container .toolct{display:inline-block;height:30px;background-color:#6f6965;padding:5px 14px;box-sizing:border-box;border-radius:6px}.box .container .toolct span{margin:0 10px}.box .container .toolct i{display:inline-block;cursor:pointer}.box .container .percentTip{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;width:100px;height:30px;z-index:9999;text-align:center;line-height:30px;font-size:16px;border-radius:8px;color:#fff;background:linear-gradient(315deg,#4f504e,#151313);background:-o-linear-gradient(left,#4f504e,#151313);background:-webkit-gradient(linear,100% 0,100% 0,from(#4f504e),to(#151313))}.box .container .pageTurnSpan{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;z-index:99999;display:none;width:30px;height:38px;font-size:30px;line-height:38px;cursor:pointer}.box .container .pageTurnSpan.prev{float:left;margin-left:9px}.box .container .pageTurnSpan.next{float:right;margin-right:9px}.box .container .pageTurnSpan.next.active i,.box .container .pageTurnSpan.prev.active i{display:inline-block}`]
            },] },
];
/** @nocollapse */
PagePreviewComponent.ctorParameters = () => [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1wcmV2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25lLWltZy1wcmV2aWV3LyIsInNvdXJjZXMiOlsibGliL3BhZ2UtcHJldmlldy9wYWdlLXByZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBeUJwSCxNQUFNO0lBYUY7eUJBVm9CLEdBQUc7MEJBRUQsS0FBSzt5QkFDTixLQUFLO29CQUNYLENBQUM7b0JBQ0QsQ0FBQzt1QkFDRSxDQUFDOzJCQUVHLENBQUM7OEJBTUksSUFBSSxZQUFZLEVBQVU7S0FKcEM7Ozs7SUFTakIsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkIsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNWOzs7OztJQUdELFdBQVcsQ0FBQyxLQUFpQjtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNyRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FB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QUE7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1NBQ3hEO0tBQ0Y7OztZQW5OSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0NBZ0JYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLDAwREFBMDBELENBQUM7YUFDcjFEOzs7OztzQkFnQkksS0FBSzt1QkFDTCxLQUFLOzZCQUNMLE1BQU07d0JBRU4sU0FBUyxTQUFDLFdBQVc7NEJBQ3JCLFNBQVMsU0FBQyxlQUFlOzBCQVV6QixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQWFwQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQWNwQyxZQUFZLFNBQUMsZ0JBQWdCO3lCQVE3QixZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSU1HTElTVCB9IGZyb20gJy4uL21vZGVsL25lLXByZXZpZXcubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZS1wYWdlLXByZXZpZXcnLFxuICB0ZW1wbGF0ZTogYDxuei1zcGluIFtuelNwaW5uaW5nXT1cImlzU3Bpbm5pbmdcIj5cbiAgPGRpdiBjbGFzcz1cImJveFwiIFtuZ1N0eWxlXT1cInsnaGVpZ2h0Jzogc25IZWlnaHR9XCI+XG4gICAgPGRpdiAjY29udGFpbmVyIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8aW1nICNpbWFnZUluc3RhbmNlIGNsYXNzPVwiaW1hZ2Ugcm90YXRlMFwiIFtzcmNdPVwibm93SW1nVXJsXCIgLz5cbiAgICAgIDxkaXYgKGNsaWNrKT1cInByZXYoKVwiIGNsYXNzPVwicGFnZVR1cm5TcGFuIHByZXZcIj48aSBjbGFzcz1cImFudGljb24gYW50aWNvbi1sZWZ0XCI+PC9pPjwvZGl2PlxuICAgICAgPGRpdiAoY2xpY2spPVwibmV4dCgpXCIgY2xhc3M9XCJwYWdlVHVyblNwYW4gbmV4dFwiPjxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXJpZ2h0XCI+PC9pPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRvb2xcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xjdFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwib3Blcl9iaWdnZXJcIiB0aXRsZT1cIuaUvuWkp+WbvueJh1wiIChjbGljayk9XCJ6b29tKClcIj48aSBjbGFzcz1cImFudGljb24gYW50aWNvbi1wbHVzLWNpcmNsZS1vXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9wZXJfc21hbGxlclwiIHRpdGxlPVwi57yp5bCP5Zu+54mHXCIgKGNsaWNrKT1cInpvb21PdXQoKVwiPjxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLW1pbnVzLWNpcmNsZS1vXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9wZXJfcm90YXRlXCIgdGl0bGU9XCLlkJHlj7Pml4vovaxcIiAoY2xpY2spPVwicm90YXRlKClcIj48aSBjbGFzcz1cImFudGljb24gYW50aWNvbi1yZWxvYWRcIj48L2k+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbnotc3Bpbj5cbmAsXG4gIHN0eWxlczogW2AuYm94e3dpZHRoOjEwMCU7aGVpZ2h0OjQwMHB4O2JvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMTUpO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0uYm94IGl7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDo5OTk5OTtkaXNwbGF5OmlubGluZS1ibG9ja30uYm94IC5yb3RhdGUwe3RyYW5zZm9ybTpyb3RhdGUoMCk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApfS5ib3ggLnJvdGF0ZTkwe3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9LmJveCAucm90YXRlMTgwe3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX0uYm94IC5yb3RhdGUyNzB7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfS5ib3ggLmNvbnRhaW5lcjpob3ZlciAucGFnZVR1cm5TcGFuLC5ib3ggLmNvbnRhaW5lcjpob3ZlciAudG9vbHtkaXNwbGF5OmJsb2NrfS5ib3ggLmNvbnRhaW5lcnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMSl9LmJveCAuY29udGFpbmVyIC5pbWFnZXtwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW46MDtwYWRkaW5nOjA7ei1pbmRleDo5OTk7Y3Vyc29yOm1vdmV9LmJveCAuY29udGFpbmVyIC5pbWFnZS5hY3RpdmV7ZGlzcGxheTpibG9ja30uYm94IC5jb250YWluZXIgLnRvb2x7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjRweDt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6bm9uZTt6LWluZGV4Ojk5OTk5fS5ib3ggLmNvbnRhaW5lciAudG9vbGN0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDozMHB4O2JhY2tncm91bmQtY29sb3I6IzZmNjk2NTtwYWRkaW5nOjVweCAxNHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXItcmFkaXVzOjZweH0uYm94IC5jb250YWluZXIgLnRvb2xjdCBzcGFue21hcmdpbjowIDEwcHh9LmJveCAuY29udGFpbmVyIC50b29sY3QgaXtkaXNwbGF5OmlubGluZS1ibG9jaztjdXJzb3I6cG9pbnRlcn0uYm94IC5jb250YWluZXIgLnBlcmNlbnRUaXB7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7cmlnaHQ6MDtsZWZ0OjA7bWFyZ2luOmF1dG87d2lkdGg6MTAwcHg7aGVpZ2h0OjMwcHg7ei1pbmRleDo5OTk5O3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjMwcHg7Zm9udC1zaXplOjE2cHg7Ym9yZGVyLXJhZGl1czo4cHg7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgzMTVkZWcsIzRmNTA0ZSwjMTUxMzEzKTtiYWNrZ3JvdW5kOi1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCM0ZjUwNGUsIzE1MTMxMyk7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwxMDAlIDAsMTAwJSAwLGZyb20oIzRmNTA0ZSksdG8oIzE1MTMxMykpfS5ib3ggLmNvbnRhaW5lciAucGFnZVR1cm5TcGFue3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO3JpZ2h0OjA7bGVmdDowO21hcmdpbjphdXRvO3otaW5kZXg6OTk5OTk7ZGlzcGxheTpub25lO3dpZHRoOjMwcHg7aGVpZ2h0OjM4cHg7Zm9udC1zaXplOjMwcHg7bGluZS1oZWlnaHQ6MzhweDtjdXJzb3I6cG9pbnRlcn0uYm94IC5jb250YWluZXIgLnBhZ2VUdXJuU3Bhbi5wcmV2e2Zsb2F0OmxlZnQ7bWFyZ2luLWxlZnQ6OXB4fS5ib3ggLmNvbnRhaW5lciAucGFnZVR1cm5TcGFuLm5leHR7ZmxvYXQ6cmlnaHQ7bWFyZ2luLXJpZ2h0OjlweH0uYm94IC5jb250YWluZXIgLnBhZ2VUdXJuU3Bhbi5uZXh0LmFjdGl2ZSBpLC5ib3ggLmNvbnRhaW5lciAucGFnZVR1cm5TcGFuLnByZXYuYWN0aXZlIGl7ZGlzcGxheTppbmxpbmUtYmxvY2t9YF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZVByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgZm9jdXNFbGVtZW50OiBhbnk7XG4gICAgem9vbVJhdGlvOiBudW1iZXIgPSAxLjI7XG4gICAgaW1nUmF0aW86IG51bWJlcjtcbiAgICBpc1NwaW5uaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgbW91c2VEb3duOiBib29sZWFuID0gZmFsc2U7XG4gICAgZGlzWDogbnVtYmVyID0gMDtcbiAgICBkaXNZOiBudW1iZXIgPSAwO1xuICAgIG5leHREZWc6IG51bWJlciA9IDBcbiAgICBub3dJbWdVcmw6IHN0cmluZztcbiAgICBub3dJbWdJbmRleDogbnVtYmVyID0gMDtcbiAgXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIEBJbnB1dCgpIGltZ0xpc3Q6IElNR0xJU1RbXTtcbiAgICBASW5wdXQoKSBzbkhlaWdodD86IHN0cmluZztcbiAgICBAT3V0cHV0KCkgc25QYWdlQnRuQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgXG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImltYWdlSW5zdGFuY2VcIikgaW1hZ2VJbnN0YW5jZTogRWxlbWVudFJlZjtcbiAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLm5vd0ltZ1VybCA9IHRoaXMuaW1nTGlzdFt0aGlzLm5vd0ltZ0luZGV4XS51cmw7XG4gICAgICB0aGlzLmlzU3Bpbm5pbmcgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0SW1nU2l6ZSgpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICBcbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCkge1xuICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOy8v56aB5q2i5rWP6KeI5Zmo6Ieq5bim5ouW5Yqo5pWI5p6cXG4gICAgICAgIHRoaXMuZm9jdXNFbGVtZW50ID0gdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZGlzWCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgICAgICB0aGlzLmRpc1kgPSBldmVudC5jbGllbnRZIC0gdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zZXRDYXB0dXJlICYmIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnNldENhcHR1cmUuc2V0Q2FwdHVyZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcbiAgICBvbk1vdXNlbW92ZShldmVudDogTW91c2VFdmVudCkge1xuICAgICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzRWxlbWVudCA9PSB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgIGxldCBpTCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLmRpc1g7XG4gICAgICAgICAgbGV0IGlUID0gZXZlbnQuY2xpZW50WSAtIHRoaXMuZGlzWTtcbiAgXG4gICAgICAgICAgLy8gaUwgPD0gMCAmJiAoaUwgPSAwKTtcbiAgICAgICAgICAvLyBpTCA+IG1heFcgJiYgKGlMID0gbWF4Vyk7XG4gICAgICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IGlMICsgXCJweFwiO1xuICAgICAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IGlUICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzptb3VzZXVwJylcbiAgICBvbk1vdXNldXAoKSB7XG4gICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5mb2N1c0VsZW1lbnQgPSBudWxsO1xuICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xuICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcbiAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnJlbGVhc2VDYXB0dXJlICYmIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnJlbGVhc2VDYXB0dXJlKCk7XG4gICAgfTtcbiAgICBASG9zdExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgbW91c2V3aGVlbChldmVudDogTW91c2VFdmVudCB8IGFueSkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJtb3VzZXdoZWVsXCIsIGV2ZW50KTtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT0gdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsvL+emgeatoua1j+iniOWZqOiHquW4puaLluWKqOaViOaenFxuICAgICAgICBcbiAgICAgICAgaWYoZXZlbnQud2hlZWxEZWx0YSA+IDApe1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiPjBcIiwgZXZlbnQud2hlZWxEZWx0YSk7XG4gICAgICAgICAgdGhpcy56b29tKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiPDBcIiwgZXZlbnQud2hlZWxEZWx0YSk7XG4gICAgICAgICAgdGhpcy56b29tT3V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc2V0Q2FwdHVyZSAmJiB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zZXRDYXB0dXJlLnNldENhcHR1cmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIHNldEltZ1NpemUoKSB7XG4gICAgICBsZXQgY29udGFpbmVyV2lkdGggPSB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgbGV0IGNvbnRhaW5lckhlaWdodCA9IHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgbGV0IGltZ05hdHVyYWxXaWR0aCA9IHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50Lm5hdHVyYWxXaWR0aDtcbiAgICAgIGxldCBpbWdOYXR1cmFsSGVpZ2h0ID0gdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQubmF0dXJhbEhlaWdodDtcbiAgICAgIHRoaXMuaW1nUmF0aW8gPSBpbWdOYXR1cmFsV2lkdGggLyBpbWdOYXR1cmFsSGVpZ2h0O1xuICBcbiAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSBcImltYWdlXCI7XG4gIFxuICAgICAgaWYodGhpcy5pbWdSYXRpbyA8IGNvbnRhaW5lcldpZHRoIC8gY29udGFpbmVySGVpZ2h0KXtcbiAgICAgICAgbGV0IGltZ1dpZHRoID0gY29udGFpbmVySGVpZ2h0IC8gaW1nTmF0dXJhbEhlaWdodCAqIGltZ05hdHVyYWxXaWR0aDtcbiAgICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBpbWdXaWR0aCArICdweCc7XG4gICAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGNvbnRhaW5lckhlaWdodCArICdweCc7XG4gICAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSAoY29udGFpbmVyV2lkdGggLSBpbWdXaWR0aCkvMiArJ3B4JztcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgaW1nSGVpZ2h0ID0gY29udGFpbmVyV2lkdGggLyBpbWdOYXR1cmFsV2lkdGggKiBpbWdOYXR1cmFsSGVpZ2h0O1xuICAgICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IGNvbnRhaW5lcldpZHRoICsgJ3B4JztcbiAgICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaW1nSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gKGNvbnRhaW5lckhlaWdodCAtIGltZ0hlaWdodCkvMiArJ3B4JztcbiAgICAgIH1cbiAgXG4gICAgICB0aGlzLmlzU3Bpbm5pbmcgPSBmYWxzZTtcbiAgICB9XG4gIFxuICAgIHByZXYoKSB7XG4gICAgICBpZih0aGlzLm5vd0ltZ0luZGV4PjApIHtcbiAgICAgICAgdGhpcy5pc1NwaW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub3dJbWdJbmRleC0tO1xuICAgICAgICB0aGlzLm5vd0ltZ1VybCA9IHRoaXMuaW1nTGlzdFt0aGlzLm5vd0ltZ0luZGV4XS51cmw7XG4gICAgICAgIHRoaXMuc25QYWdlQnRuQ2xpY2suZW1pdCh0aGlzLm5vd0ltZ0luZGV4KTtcbiAgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0SW1nU2l6ZSgpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIG5leHQoKSB7XG4gICAgICBpZih0aGlzLm5vd0ltZ0luZGV4PHRoaXMuaW1nTGlzdC5sZW5ndGgtMSkge1xuICAgICAgICB0aGlzLmlzU3Bpbm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vd0ltZ0luZGV4Kys7XG4gICAgICAgIHRoaXMubm93SW1nVXJsID0gdGhpcy5pbWdMaXN0W3RoaXMubm93SW1nSW5kZXhdLnVybDtcbiAgICAgICAgdGhpcy5zblBhZ2VCdG5DbGljay5lbWl0KHRoaXMubm93SW1nSW5kZXgpO1xuICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRJbWdTaXplKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgem9vbSgpIHtcbiAgICAgIGxldCBuZXdJbWdXaWR0aCA9IE1hdGguY2VpbCh0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAqIHRoaXMuem9vbVJhdGlvKTtcbiAgICAgIGxldCBuZXdJbWdIZWlnaHQgPSBNYXRoLmNlaWwodGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0ICogdGhpcy56b29tUmF0aW8pO1xuICBcbiAgICAgIHRoaXMudXBkYXRlSW1nU2l6ZSgnem9vbScsIG5ld0ltZ1dpZHRoLCBuZXdJbWdIZWlnaHQpO1xuICAgIH1cbiAgXG4gICAgem9vbU91dCgpIHtcbiAgICAgIGxldCBuZXdJbWdXaWR0aCA9IE1hdGguY2VpbCh0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAvIHRoaXMuem9vbVJhdGlvKTtcbiAgICAgIGxldCBuZXdJbWdIZWlnaHQgPSBNYXRoLmNlaWwodGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC8gdGhpcy56b29tUmF0aW8pO1xuICBcbiAgICAgIHRoaXMudXBkYXRlSW1nU2l6ZSgnem9vbW91dCcsIG5ld0ltZ1dpZHRoLCBuZXdJbWdIZWlnaHQpO1xuICAgIH1cbiAgXG4gICAgcm90YXRlKCkge1xuICAgICAgbGV0IHJvdGF0ZUNsYXNzID0gdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lLm1hdGNoKC8ocm90YXRlKShcXGQqKS8pO1xuICAgICAgaWYocm90YXRlQ2xhc3Mpe1xuICAgICAgICB0aGlzLm5leHREZWcgPSAocm90YXRlQ2xhc3NbMl0gKiAxICsgOTApICUgMzYwO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMubmV4dERlZyA9IDkwO1xuICAgICAgfVxuICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gXCJpbWFnZSByb3RhdGVcIiArIHRoaXMubmV4dERlZztcbiAgXG4gICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggLSB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCkgLyAyICsgJ3B4JztcbiAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9ICh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCAtIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCkgLyAyICsgJ3B4JztcbiAgICB9XG4gIFxuICAgIHVwZGF0ZUltZ1NpemUodHlwZSwgbmV3SW1nV2lkdGgsIG5ld0ltZ0hlaWdodCkge1xuICAgICAgbGV0IGNvbnRhaW5lcldpZHRoID0gdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgIGxldCBjb250YWluZXJIZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAvLyAgIGxldCBpc1ZlcnRpY2FsID0gdGhpcy5uZXh0RGVnID09IDkwIHx8IHRoaXMubmV4dERlZyA9PSAyNzA7XG4gICAgICBsZXQgaXNWZXJ0aWNhbCA9IHRydWU7XG4gIFxuICAgICAgdGhpcy5pbWFnZUluc3RhbmNlLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBuZXdJbWdXaWR0aCArICdweCc7XG4gICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBuZXdJbWdIZWlnaHQgKyAncHgnO1xuICBcbiAgICAgIGlmIChjb250YWluZXJXaWR0aCA+IGlzVmVydGljYWwgPyBuZXdJbWdXaWR0aCA6IG5ld0ltZ0hlaWdodCkge1xuICAgICAgICB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gKGNvbnRhaW5lcldpZHRoIC0gbmV3SW1nV2lkdGgpIC8gMiArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaUwgPSB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgKyBuZXdJbWdXaWR0aCAvIDEwICogKHR5cGUgPT09ICd6b29tJyA/IC0xIDogMSk7XG4gICAgICAgIGxldCBpUiA9IGNvbnRhaW5lcldpZHRoIC0gbmV3SW1nV2lkdGg7XG4gIFxuICAgICAgICBpTCA+PSAwICYmIChpTCA9IDApO1xuICAgICAgICBpTCA8PSBpUiAmJiAoaUwgPSBpUilcbiAgXG4gICAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSBpTCArICdweCc7XG4gICAgICB9XG4gICAgICBpZiAoY29udGFpbmVySGVpZ2h0ID4gaXNWZXJ0aWNhbCA/IG5ld0ltZ0hlaWdodCA6IG5ld0ltZ1dpZHRoKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IChjb250YWluZXJIZWlnaHQgLSBuZXdJbWdIZWlnaHQpIC8gMiArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaVQgPSB0aGlzLmltYWdlSW5zdGFuY2UubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0ICsgbmV3SW1nSGVpZ2h0IC8gMTAgKiAodHlwZSA9PT0gJ3pvb20nID8gLTEgOiAxKTtcbiAgICAgICAgbGV0IGlCID0gY29udGFpbmVySGVpZ2h0IC0gbmV3SW1nSGVpZ2h0O1xuICBcbiAgICAgICAgaVQgPj0gMCAmJiAoaVQgPSAwKTtcbiAgICAgICAgaVQgPD0gaUIgJiYgKGlUID0gaUIpXG4gICAgICAgIHRoaXMuaW1hZ2VJbnN0YW5jZS5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IGlUICsgXCJweFwiO1xuICAgICAgfVxuICAgIH0gIFxufVxuIl19