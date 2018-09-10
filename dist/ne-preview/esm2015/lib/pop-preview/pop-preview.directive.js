/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ContentChild, ContentChildren, Directive, ElementRef, Input, NgModule, Renderer2 } from "@angular/core";
import { CommonModule } from "@angular/common";
export class ViewerContentDirective {
    /**
     * @param {?} _el
     */
    constructor(_el) {
        this._el = _el;
        this.nativeElement = this._el.nativeElement;
    }
}
ViewerContentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[viewer-content]',
            },] },
];
/** @nocollapse */
ViewerContentDirective.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    ViewerContentDirective.prototype.nativeElement;
    /** @type {?} */
    ViewerContentDirective.prototype._el;
}
export class ViewerDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _render
     */
    constructor(_elementRef, _render) {
        this._elementRef = _elementRef;
        this._render = _render;
        this.originalAttr = "name";
        this.nativeElement = this._elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set _imgContents(value) {
        this.imgContents = value;
        this.renderContent(true);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderContent();
    }
    /**
     * @param {?=} flag
     * @return {?}
     */
    renderContent(flag) {
        /** @type {?} */
        let nativeEl = this.nativeElement;
        if (this.content) {
            nativeEl = this.content.nativeElement;
        }
        setTimeout(() => {
            /** @type {?} */
            let imgs = nativeEl.getElementsByTagName('img');
            if (imgs.length) {
                if (this.viewer) {
                    this.viewer.destroy();
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
                this.viewer = new Viewer(this.nativeElement, {
                    url: this.originalAttr,
                });
            }
        }, 500);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.viewer) {
            this.viewer.destroy();
        }
    }
}
ViewerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[viewer]'
            },] },
];
/** @nocollapse */
ViewerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
ViewerDirective.propDecorators = {
    originalAttr: [{ type: Input }],
    content: [{ type: ContentChild, args: ['content',] }],
    _imgContents: [{ type: ContentChildren, args: [ViewerContentDirective,] }]
};
if (false) {
    /** @type {?} */
    ViewerDirective.prototype.originalAttr;
    /** @type {?} */
    ViewerDirective.prototype.content;
    /** @type {?} */
    ViewerDirective.prototype.viewer;
    /** @type {?} */
    ViewerDirective.prototype.imgContents;
    /** @type {?} */
    ViewerDirective.prototype.nativeElement;
    /** @type {?} */
    ViewerDirective.prototype._elementRef;
    /** @type {?} */
    ViewerDirective.prototype._render;
}
export class ViewerDirectiveModule {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wLXByZXZpZXcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmUtaW1nLXByZXZpZXcvIiwic291cmNlcyI6WyJsaWIvcG9wLXByZXZpZXcvcG9wLXByZXZpZXcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQ0gsWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBR1IsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVEvQyxNQUFNOzs7O0lBSUYsWUFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztLQUMvQzs7O1lBVEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7YUFDL0I7Ozs7WUFkRyxVQUFVOzs7Ozs7OztBQTRCZCxNQUFNOzs7OztJQWVGLFlBQW9CLFdBQXVCLEVBQy9CO1FBRFEsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDL0IsWUFBTyxHQUFQLE9BQU87NEJBZEksTUFBTTtRQWV6QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO0tBRXZEOzs7OztJQWRELElBQ0ksWUFBWSxDQUFDLEtBQUs7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1Qjs7OztJQVlELFFBQVE7UUFDSixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDeEI7Ozs7O0lBRUQsYUFBYSxDQUFDLElBQWM7O1FBQ3hCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZixRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7U0FDekM7UUFDRCxVQUFVLENBQUMsR0FBRyxFQUFFOztZQUNaLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUN6Qjs7Ozs7Ozs7Ozs7Ozs7Z0JBY0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUN6QyxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVk7aUJBQ3pCLENBQUMsQ0FBQzthQUNOO1NBQ0osRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNYOzs7O0lBRUQsV0FBVztRQUNQLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtLQUNKOzs7WUEvREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxVQUFVO2FBQ3ZCOzs7O1lBM0JHLFVBQVU7WUFLVixTQUFTOzs7MkJBd0JSLEtBQUs7c0JBRUwsWUFBWSxTQUFDLFNBQVM7MkJBRXRCLGVBQWUsU0FBQyxzQkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9FM0MsTUFBTTs7O1lBVkwsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixlQUFlLEVBQUUsc0JBQXNCO2lCQUMxQztnQkFDRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLENBQUM7Z0JBQ2xELE9BQU8sRUFBRTtvQkFDTCxZQUFZO2lCQUNmO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgZ2lzY2FmZXIgb24gMjAxNy8wOS8yMS5cbiAqIOWfuuS6jnZpZXdlci5qc+WwgeijhVxuICovXG5pbXBvcnQge1xuICAgIENvbnRlbnRDaGlsZCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBSZW5kZXJlcjJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcblxuZGVjbGFyZSB2YXIgVmlld2VyO1xuXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3ZpZXdlci1jb250ZW50XScsXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlckNvbnRlbnREaXJlY3RpdmUge1xuXG4gICAgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t2aWV3ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBWaWV3ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KClcbiAgICBvcmlnaW5hbEF0dHI6IHN0cmluZyA9IFwibmFtZVwiO1xuICAgIEBDb250ZW50Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50OiBFbGVtZW50UmVmO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihWaWV3ZXJDb250ZW50RGlyZWN0aXZlKVxuICAgIHNldCBfaW1nQ29udGVudHModmFsdWUpIHtcbiAgICAgICAgdGhpcy5pbWdDb250ZW50cyA9IHZhbHVlO1xuICAgICAgICB0aGlzLnJlbmRlckNvbnRlbnQodHJ1ZSk7XG4gICAgfVxuXG4gICAgdmlld2VyOiBhbnk7XG4gICAgaW1nQ29udGVudHM7XG4gICAgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIF9yZW5kZXI6IFJlbmRlcmVyMikge1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ29udGVudChmbGFnPzogYm9vbGVhbikge1xuICAgICAgICBsZXQgbmF0aXZlRWwgPSB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIG5hdGl2ZUVsID0gdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW1ncyA9IG5hdGl2ZUVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKTtcbiAgICAgICAgICAgIGlmIChpbWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpZXdlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdlci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmICghZmxhZykge1xuICAgICAgICAgICAgICAgIC8vICAgaW1nc1swXS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudmlld2VyID0gbmV3IFZpZXdlcih0aGlzLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICB1cmw6IHRoaXMub3JpZ2luYWxBdHRyLFxuICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgaW1nc1tpbWdzLmxlbmd0aC0xXS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudmlld2VyID0gbmV3IFZpZXdlcih0aGlzLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICB1cmw6IHRoaXMub3JpZ2luYWxBdHRyLFxuICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3ZXIgPSBuZXcgVmlld2VyKHRoaXMubmF0aXZlRWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMub3JpZ2luYWxBdHRyLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy52aWV3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudmlld2VyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVmlld2VyRGlyZWN0aXZlLCBWaWV3ZXJDb250ZW50RGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbVmlld2VyRGlyZWN0aXZlLCBWaWV3ZXJDb250ZW50RGlyZWN0aXZlXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBWaWV3ZXJEaXJlY3RpdmVNb2R1bGUge1xufSJdfQ==