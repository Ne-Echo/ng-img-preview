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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmUtcHJldmlldy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZS1pbWctcHJldmlldy8iLCJzb3VyY2VzIjpbImxpYi9uZS1wcmV2aWV3LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUNILFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsUUFBUSxFQUdSLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRL0MsTUFBTTs7OztJQUlGLFlBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7S0FDL0M7OztZQVRKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2FBQy9COzs7O1lBZEcsVUFBVTs7Ozs7Ozs7QUE0QmQsTUFBTTs7Ozs7SUFlRixZQUFvQixXQUF1QixFQUMvQjtRQURRLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQy9CLFlBQU8sR0FBUCxPQUFPOzRCQWRJLE1BQU07UUFlekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztLQUV2RDs7Ozs7SUFkRCxJQUNJLFlBQVksQ0FBQyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDNUI7Ozs7SUFZRCxRQUFRO1FBQ0osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3hCOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFjOztRQUN4QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2YsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1NBQ3pDO1FBQ0QsVUFBVSxDQUFDLEdBQUcsRUFBRTs7WUFDWixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDekI7Ozs7Ozs7Ozs7Ozs7O2dCQWNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDekMsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZO2lCQUN6QixDQUFDLENBQUM7YUFDTjtTQUNKLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDWDs7OztJQUVELFdBQVc7UUFDUCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDekI7S0FDSjs7O1lBL0RKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsVUFBVTthQUN2Qjs7OztZQTNCRyxVQUFVO1lBS1YsU0FBUzs7OzJCQXdCUixLQUFLO3NCQUVMLFlBQVksU0FBQyxTQUFTOzJCQUV0QixlQUFlLFNBQUMsc0JBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvRTNDLE1BQU07OztZQVZMLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1YsZUFBZSxFQUFFLHNCQUFzQjtpQkFDMUM7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLHNCQUFzQixDQUFDO2dCQUNsRCxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtpQkFDZjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGdpc2NhZmVyIG9uIDIwMTcvMDkvMjEuXG4gKiDln7rkuo52aWV3ZXIuanPlsIHoo4VcbiAqL1xuaW1wb3J0IHtcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIERpcmVjdGl2ZSxcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgUmVuZGVyZXIyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbmRlY2xhcmUgdmFyIFZpZXdlcjtcblxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t2aWV3ZXItY29udGVudF0nLFxufSlcbmV4cG9ydCBjbGFzcyBWaWV3ZXJDb250ZW50RGlyZWN0aXZlIHtcblxuICAgIG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdmlld2VyXSdcbn0pXG5leHBvcnQgY2xhc3MgVmlld2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpXG4gICAgb3JpZ2luYWxBdHRyOiBzdHJpbmcgPSBcIm5hbWVcIjtcbiAgICBAQ29udGVudENoaWxkKCdjb250ZW50JykgY29udGVudDogRWxlbWVudFJlZjtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oVmlld2VyQ29udGVudERpcmVjdGl2ZSlcbiAgICBzZXQgX2ltZ0NvbnRlbnRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW1nQ29udGVudHMgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXJDb250ZW50KHRydWUpO1xuICAgIH1cblxuICAgIHZpZXdlcjogYW55O1xuICAgIGltZ0NvbnRlbnRzO1xuICAgIG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBfcmVuZGVyOiBSZW5kZXJlcjIpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICAgIH1cblxuICAgIHJlbmRlckNvbnRlbnQoZmxhZz86IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IG5hdGl2ZUVsID0gdGhpcy5uYXRpdmVFbGVtZW50O1xuICAgICAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICAgICAgICBuYXRpdmVFbCA9IHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGltZ3MgPSBuYXRpdmVFbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XG4gICAgICAgICAgICBpZiAoaW1ncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3ZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiAoIWZsYWcpIHtcbiAgICAgICAgICAgICAgICAvLyAgIGltZ3NbMF0ub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnZpZXdlciA9IG5ldyBWaWV3ZXIodGhpcy5uYXRpdmVFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgdXJsOiB0aGlzLm9yaWdpbmFsQXR0cixcbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgIGltZ3NbaW1ncy5sZW5ndGgtMV0ub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnZpZXdlciA9IG5ldyBWaWV3ZXIodGhpcy5uYXRpdmVFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgdXJsOiB0aGlzLm9yaWdpbmFsQXR0cixcbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIHRoaXMudmlld2VyID0gbmV3IFZpZXdlcih0aGlzLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLm9yaWdpbmFsQXR0cixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudmlld2VyKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdlci5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFZpZXdlckRpcmVjdGl2ZSwgVmlld2VyQ29udGVudERpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1ZpZXdlckRpcmVjdGl2ZSwgVmlld2VyQ29udGVudERpcmVjdGl2ZV0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgVmlld2VyRGlyZWN0aXZlTW9kdWxlIHtcbn0iXX0=