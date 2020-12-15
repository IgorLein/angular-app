import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightText]',
})
export class HighlightTextDirective {
  defaultColor = '';
  @Input() appHighlightText = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.defaultColor = this.el.nativeElement.style.color;
    this.el.nativeElement.style.color = this.appHighlightText;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.color = this.defaultColor;
  }
}
