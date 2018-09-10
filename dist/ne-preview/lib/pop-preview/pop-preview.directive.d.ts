/**
 * Created by giscafer on 2017/09/21.
 * 基于viewer.js封装
 */
import { ElementRef, OnDestroy, OnInit, Renderer2 } from "@angular/core";
export declare class ViewerContentDirective {
    private _el;
    nativeElement: HTMLElement;
    constructor(_el: ElementRef);
}
export declare class ViewerDirective implements OnInit, OnDestroy {
    private _elementRef;
    private _render;
    originalAttr: string;
    content: ElementRef;
    _imgContents: any;
    viewer: any;
    imgContents: any;
    nativeElement: HTMLElement;
    constructor(_elementRef: ElementRef, _render: Renderer2);
    ngOnInit(): void;
    renderContent(flag?: boolean): void;
    ngOnDestroy(): void;
}
export declare class ViewerDirectiveModule {
}
