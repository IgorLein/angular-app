import { NgModule } from '@angular/core';

import { HighlightTextDirective } from './highlight-text/highlight-text.directive';
import { CustomForDirective } from './custom-for/custom-for.directive';

@NgModule({
  declarations: [
    HighlightTextDirective,
    CustomForDirective,
  ],
  exports: [
    HighlightTextDirective,
    CustomForDirective,
  ]
})
export class DirectivesModule {}
