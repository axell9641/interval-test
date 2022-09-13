import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective implements OnChanges {
  defaultColor = 'yellow';
  otra = 0;
  @Input('highlight') bgColor: string = '';

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
  }

  isPostiveNumber(number: number) {
    return (number>0);
  }


}