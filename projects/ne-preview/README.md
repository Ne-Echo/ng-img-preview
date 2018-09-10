An angular component for viewer.js

## Installation

```bash
npm install ng-zorro-antd --save
# 依赖ng-zorro-antd，配置请参照官方文档#
# https://ng.ant.design/docs/getting-started/zh

npm install viewerjs --save

npm install ne-img-preview --save
```

## Options

### **sn-pop-preview**
>**`imgList`** : image data list.
>
>type: IMGLIST {
>   dataOriginal?: string;
>   url: string;
>   alt?: string;
>}
>
>---
>
>**`snWidht`** : style attribute of img tag.
>
>type: string, eg: '20px'.
>
>---
>
>**`snHeight`** : style attribute of img tag.
>
>type: string, eg: '20px'.
>
>---

### **sn-page-preview**
>**`imgList`** : image data list.
>
>type: IMGLIST {
>   dataOriginal?: string;
>   url: string;
>   alt?: string;
>}
>
>---
>
>**`snHeight`** : style attribute of img tag.
>
>type: string, eg: '20px'.
>
>---

## Usage

- Import `viewer.css` and `viewer.js` in `angular.json`.
```ts
{
    ...
    "styles": [
        "node_modules/viewerjs/dist/viewer.min.css"
    ],
    "scripts": [
        "node_modules/viewerjs/dist/viewer.min.js"
    ]
    ...
}
```

- Import `NePreviewModule` in `app.module.ts`.
```ts
import { NePreviewModule } from 'sn-filer';

@NgModule({
  ...
  imports: [
    ...
    NePreviewModule
  ],
  ...
})
```

- Model use
```ts
import { IMGLIST } from 'sn-filer';
```

- Component use
```html
<ne-pop-preview 
  [imgList]="imgList"
  [snWidth]="snWidth"
  [snHeight]="snHeight">
</ne-pop-preview>

<ne-page-preview 
    [imgList]="imgList"
    [snHeight]="snHeight"
    (snPageBtnClick)="onPageBtnClick($event)">
</ne-page-preview>
```
