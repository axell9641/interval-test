import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pasteDirective]',
})
export class PasteDirective {
  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('paste', ['$event'])
  onEvent($event: ClipboardEvent) {
    $event.preventDefault(); //blocks write to input element
    let data = $event.clipboardData.getData('text');
    this.el.nativeElement.value = data.toUpperCase();
  }
}
