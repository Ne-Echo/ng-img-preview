import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { PopPreviewComponent } from './pop-preview/pop-preview.component';
import { PagePreviewComponent } from './page-preview/page-preview.component';

import { ViewerDirectiveModule } from './pop-preview/pop-preview.directive';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ViewerDirectiveModule
  ],
  declarations: [PopPreviewComponent, PagePreviewComponent],
  exports: [PopPreviewComponent, PagePreviewComponent]
})
export class NePreviewModule { }
