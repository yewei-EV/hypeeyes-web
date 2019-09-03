import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    NgbPopoverModule,
  ],
})
export class SharedModule {
}
