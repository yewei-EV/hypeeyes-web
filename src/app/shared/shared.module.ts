import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMasonryModule } from 'ngx-masonry';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    NgbPopoverModule,
    NgxMasonryModule,
    InfiniteScrollModule,
  ],
})
export class SharedModule {
}
