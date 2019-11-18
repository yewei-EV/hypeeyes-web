import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMasonryModule } from 'ngx-masonry';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    NgbModule,
    NgxMasonryModule,
    InfiniteScrollModule,
  ],
})
export class SharedModule {
}
