import { Directive, TemplateRef, ViewContainerRef, DoCheck, Input } from '@angular/core';

@Directive({
  selector: '[appCustomFor]'
})
export class CustomForDirective implements DoCheck {
  @Input() appCustomForOf: number[] = [];
  prevInputArrLength = 0;

  constructor(
    private tmpl: TemplateRef<any>,
    private vc: ViewContainerRef
  ) {}

  ngDoCheck() {
    if (this.prevInputArrLength === this.appCustomForOf.length) {
      return;
    }

    this.prevInputArrLength = this.appCustomForOf.length;
    this.vc.clear();
    this.appCustomForOf.forEach((n: number, i: number) => {
      this.vc.createEmbeddedView(this.tmpl, { $implicit: n, index: i });
    });
  }
}
