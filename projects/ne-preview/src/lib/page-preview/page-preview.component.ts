import { Component, OnInit, ViewChild, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

import { IMGLIST } from '../model/ne-preview.model';

@Component({
  selector: 'ne-page-preview',
  templateUrl: './page-preview.component.html',
  styleUrls: ['./page-preview.component.css']
})
export class PagePreviewComponent implements OnInit {

    focusElement: any;
    zoomRatio: number = 1.2;
    imgRatio: number;
    isSpinning: boolean = false;
    mouseDown: boolean = false;
    disX: number = 0;
    disY: number = 0;
    nextDeg: number = 0
    nowImgUrl: string;
    nowImgIndex: number = 0;
  
    constructor() { }

    @Input() imgList: IMGLIST[];
    @Input() snHeight?: string;
    @Output() snPageBtnClick = new EventEmitter<number>();
  
    @ViewChild("container") container: ElementRef;
    @ViewChild("imageInstance") imageInstance: ElementRef;
  
    ngOnInit() {
      this.nowImgUrl = this.imgList[this.nowImgIndex].url;
      this.isSpinning = true;
      setTimeout(() => {
        this.setImgSize();
      }, 1000);
    }
  
    @HostListener("mousedown", ["$event"])
    onMousedown(event: MouseEvent) {
      this.mouseDown = true;
      if (event.target == this.imageInstance.nativeElement) {
        event.preventDefault();//禁止浏览器自带拖动效果
        this.focusElement = this.imageInstance.nativeElement;
        this.disX = event.clientX - this.imageInstance.nativeElement.offsetLeft;
        this.disY = event.clientY - this.imageInstance.nativeElement.offsetTop;
        this.imageInstance.nativeElement.setCapture && this.imageInstance.nativeElement.setCapture.setCapture();
      } else {
        this.mouseDown = false;
      }
    }
    @HostListener('mousemove', ['$event'])
    onMousemove(event: MouseEvent) {
      if (this.mouseDown) {
        if (this.focusElement == this.imageInstance.nativeElement) {
          let iL = event.clientX - this.disX;
          let iT = event.clientY - this.disY;
  
          // iL <= 0 && (iL = 0);
          // iL > maxW && (iL = maxW);
          this.imageInstance.nativeElement.style.left = iL + "px";
          this.imageInstance.nativeElement.style.top = iT + "px";
        }
      }
    }
    @HostListener('window:mouseup')
    onMouseup() {
      this.mouseDown = false;
      this.focusElement = null;
      document.onmousemove = null;
      document.onmouseup = null;
      this.imageInstance.nativeElement.releaseCapture && this.imageInstance.nativeElement.releaseCapture();
    };
    @HostListener("mousewheel", ["$event"])
    mousewheel(event: MouseEvent | any) {
      // console.log("mousewheel", event);
      if (event.target == this.imageInstance.nativeElement) {
        event.preventDefault();//禁止浏览器自带拖动效果
        
        if(event.wheelDelta > 0){
          console.log(">0", event.wheelDelta);
          this.zoom();
        }else{
          console.log("<0", event.wheelDelta);
          this.zoomOut();
        }
        this.imageInstance.nativeElement.setCapture && this.imageInstance.nativeElement.setCapture.setCapture();
      }
    }
  
    setImgSize() {
      let containerWidth = this.container.nativeElement.clientWidth;
      let containerHeight = this.container.nativeElement.clientHeight;
      let imgNaturalWidth = this.imageInstance.nativeElement.naturalWidth;
      let imgNaturalHeight = this.imageInstance.nativeElement.naturalHeight;
      this.imgRatio = imgNaturalWidth / imgNaturalHeight;
  
      this.imageInstance.nativeElement.style.top = 0;
      this.imageInstance.nativeElement.className = "image";
  
      if(this.imgRatio < containerWidth / containerHeight){
        let imgWidth = containerHeight / imgNaturalHeight * imgNaturalWidth;
        this.imageInstance.nativeElement.style.width = imgWidth + 'px';
        this.imageInstance.nativeElement.style.height = containerHeight + 'px';
        this.imageInstance.nativeElement.style.left = (containerWidth - imgWidth)/2 +'px';
      }else{
        let imgHeight = containerWidth / imgNaturalWidth * imgNaturalHeight;
        this.imageInstance.nativeElement.style.width = containerWidth + 'px';
        this.imageInstance.nativeElement.style.height = imgHeight + 'px';
        this.imageInstance.nativeElement.style.top = (containerHeight - imgHeight)/2 +'px';
      }
  
      this.isSpinning = false;
    }
  
    prev() {
      if(this.nowImgIndex>0) {
        this.isSpinning = true;
        this.nowImgIndex--;
        this.nowImgUrl = this.imgList[this.nowImgIndex].url;
        this.snPageBtnClick.emit(this.nowImgIndex);
  
        setTimeout(() => {
          this.setImgSize();
        }, 1000);
      }
    }
  
    next() {
      if(this.nowImgIndex<this.imgList.length-1) {
        this.isSpinning = true;
        this.nowImgIndex++;
        this.nowImgUrl = this.imgList[this.nowImgIndex].url;
        this.snPageBtnClick.emit(this.nowImgIndex);
  
        setTimeout(() => {
          this.setImgSize();
        }, 1000);
      }
    }
  
    zoom() {
      let newImgWidth = Math.ceil(this.imageInstance.nativeElement.clientWidth * this.zoomRatio);
      let newImgHeight = Math.ceil(this.imageInstance.nativeElement.clientHeight * this.zoomRatio);
  
      this.updateImgSize('zoom', newImgWidth, newImgHeight);
    }
  
    zoomOut() {
      let newImgWidth = Math.ceil(this.imageInstance.nativeElement.clientWidth / this.zoomRatio);
      let newImgHeight = Math.ceil(this.imageInstance.nativeElement.clientHeight / this.zoomRatio);
  
      this.updateImgSize('zoomout', newImgWidth, newImgHeight);
    }
  
    rotate() {
      let rotateClass = this.imageInstance.nativeElement.className.match(/(rotate)(\d*)/);
      if(rotateClass){
        this.nextDeg = (rotateClass[2] * 1 + 90) % 360;
      }else{
        this.nextDeg = 90;
      }
      this.imageInstance.nativeElement.className = "image rotate" + this.nextDeg;
  
      this.imageInstance.nativeElement.style.left = (this.container.nativeElement.clientWidth - this.imageInstance.nativeElement.clientWidth) / 2 + 'px';
      this.imageInstance.nativeElement.style.top = (this.container.nativeElement.clientHeight - this.imageInstance.nativeElement.clientHeight) / 2 + 'px';
    }
  
    updateImgSize(type, newImgWidth, newImgHeight) {
      let containerWidth = this.container.nativeElement.clientWidth;
      let containerHeight = this.container.nativeElement.clientHeight;
    //   let isVertical = this.nextDeg == 90 || this.nextDeg == 270;
      let isVertical = true;
  
      this.imageInstance.nativeElement.style.width = newImgWidth + 'px';
      this.imageInstance.nativeElement.style.height = newImgHeight + 'px';
  
      if (containerWidth > isVertical ? newImgWidth : newImgHeight) {
        this.imageInstance.nativeElement.style.left = (containerWidth - newImgWidth) / 2 + 'px';
      } else {
        let iL = this.imageInstance.nativeElement.offsetTop + newImgWidth / 10 * (type === 'zoom' ? -1 : 1);
        let iR = containerWidth - newImgWidth;
  
        iL >= 0 && (iL = 0);
        iL <= iR && (iL = iR)
  
        this.imageInstance.nativeElement.style.left = iL + 'px';
      }
      if (containerHeight > isVertical ? newImgHeight : newImgWidth) {
        this.imageInstance.nativeElement.style.top = (containerHeight - newImgHeight) / 2 + 'px';
      } else {
        let iT = this.imageInstance.nativeElement.offsetLeft + newImgHeight / 10 * (type === 'zoom' ? -1 : 1);
        let iB = containerHeight - newImgHeight;
  
        iT >= 0 && (iT = 0);
        iT <= iB && (iT = iB)
        this.imageInstance.nativeElement.style.top = iT + "px";
      }
    }  
}
