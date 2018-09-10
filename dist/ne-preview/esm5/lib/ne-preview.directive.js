/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ContentChild, ContentChildren, Directive, ElementRef, Input, NgModule, Renderer2 } from "@angular/core";
import { CommonModule } from "@angular/common";
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
export { ViewerContentDirective };
if (false) {
    /** @type {?} */
    ViewerContentDirective.prototype.nativeElement;
    /** @type {?} */
    ViewerContentDirective.prototype._el;
}
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
export { ViewerDirective };
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
export { ViewerDirectiveModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmUtcHJldmlldy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZS1pbWctcHJldmlldy8iLCJzb3VyY2VzIjpbImxpYi9uZS1wcmV2aWV3LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUNILFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsUUFBUSxFQUdSLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBWTNDLGdDQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0tBQy9DOztnQkFUSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtpQkFDL0I7Ozs7Z0JBZEcsVUFBVTs7aUNBUmQ7O1NBdUJhLHNCQUFzQjs7Ozs7Ozs7SUE0Qi9CLHlCQUFvQixXQUF1QixFQUMvQjtRQURRLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQy9CLFlBQU8sR0FBUCxPQUFPOzRCQWRJLE1BQU07UUFlekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztLQUV2RDtJQWRELHNCQUNJLHlDQUFZOzs7OztRQURoQixVQUNpQixLQUFLO1lBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7OztPQUFBOzs7O0lBWUQsa0NBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3hCOzs7OztJQUVELHVDQUFhOzs7O0lBQWIsVUFBYyxJQUFjO1FBQTVCLGlCQTZCQzs7UUE1QkcsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNmLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztTQUN6QztRQUNELFVBQVUsQ0FBQzs7WUFDUCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDekI7Ozs7Ozs7Ozs7Ozs7O2dCQWNELEFBYkEsZUFBZTtnQkFDZiw2QkFBNkI7Z0JBQzdCLHFEQUFxRDtnQkFDckQsZ0NBQWdDO2dCQUNoQyxVQUFVO2dCQUNWLE1BQU07Z0JBQ04sV0FBVztnQkFDWCx5Q0FBeUM7Z0JBQ3pDLHFEQUFxRDtnQkFDckQsZ0NBQWdDO2dCQUNoQyxVQUFVO2dCQUNWLE1BQU07Z0JBQ04sSUFBSTtnQkFDSixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ3pDLEdBQUcsRUFBRSxLQUFJLENBQUMsWUFBWTtpQkFDekIsQ0FBQyxDQUFDO2FBQ047U0FDSixFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ1g7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDekI7S0FDSjs7Z0JBL0RKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtpQkFDdkI7Ozs7Z0JBM0JHLFVBQVU7Z0JBS1YsU0FBUzs7OytCQXdCUixLQUFLOzBCQUVMLFlBQVksU0FBQyxTQUFTOytCQUV0QixlQUFlLFNBQUMsc0JBQXNCOzswQkF6QzNDOztTQW9DYSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBK0QzQixRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLGVBQWUsRUFBRSxzQkFBc0I7cUJBQzFDO29CQUNELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQztvQkFDbEQsT0FBTyxFQUFFO3dCQUNMLFlBQVk7cUJBQ2Y7aUJBQ0o7O2dDQTNHRDs7U0E2R2EscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGdpc2NhZmVyIG9uIDIwMTcvMDkvMjEuXG4gKiDln7rkuo52aWV3ZXIuanPlsIHoo4VcbiAqL1xuaW1wb3J0IHtcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIERpcmVjdGl2ZSxcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgUmVuZGVyZXIyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbmRlY2xhcmUgdmFyIFZpZXdlcjtcblxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t2aWV3ZXItY29udGVudF0nLFxufSlcbmV4cG9ydCBjbGFzcyBWaWV3ZXJDb250ZW50RGlyZWN0aXZlIHtcblxuICAgIG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdmlld2VyXSdcbn0pXG5leHBvcnQgY2xhc3MgVmlld2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpXG4gICAgb3JpZ2luYWxBdHRyOiBzdHJpbmcgPSBcIm5hbWVcIjtcbiAgICBAQ29udGVudENoaWxkKCdjb250ZW50JykgY29udGVudDogRWxlbWVudFJlZjtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oVmlld2VyQ29udGVudERpcmVjdGl2ZSlcbiAgICBzZXQgX2ltZ0NvbnRlbnRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW1nQ29udGVudHMgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXJDb250ZW50KHRydWUpO1xuICAgIH1cblxuICAgIHZpZXdlcjogYW55O1xuICAgIGltZ0NvbnRlbnRzO1xuICAgIG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBfcmVuZGVyOiBSZW5kZXJlcjIpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICAgIH1cblxuICAgIHJlbmRlckNvbnRlbnQoZmxhZz86IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IG5hdGl2ZUVsID0gdGhpcy5uYXRpdmVFbGVtZW50O1xuICAgICAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICAgICAgICBuYXRpdmVFbCA9IHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGltZ3MgPSBuYXRpdmVFbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XG4gICAgICAgICAgICBpZiAoaW1ncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3ZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiAoIWZsYWcpIHtcbiAgICAgICAgICAgICAgICAvLyAgIGltZ3NbMF0ub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnZpZXdlciA9IG5ldyBWaWV3ZXIodGhpcy5uYXRpdmVFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgdXJsOiB0aGlzLm9yaWdpbmFsQXR0cixcbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgIGltZ3NbaW1ncy5sZW5ndGgtMV0ub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnZpZXdlciA9IG5ldyBWaWV3ZXIodGhpcy5uYXRpdmVFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgdXJsOiB0aGlzLm9yaWdpbmFsQXR0cixcbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIHRoaXMudmlld2VyID0gbmV3IFZpZXdlcih0aGlzLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLm9yaWdpbmFsQXR0cixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudmlld2VyKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdlci5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFZpZXdlckRpcmVjdGl2ZSwgVmlld2VyQ29udGVudERpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1ZpZXdlckRpcmVjdGl2ZSwgVmlld2VyQ29udGVudERpcmVjdGl2ZV0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgVmlld2VyRGlyZWN0aXZlTW9kdWxlIHtcbn0iXX0=