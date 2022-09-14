import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[mydirective]',
})
export class BcpCiamDocumentDirective {
  private regex!: RegExp;
  private regexNumber = new RegExp(/^[0-9]+$/);
  private regexAlphaNumeric = new RegExp(/^[0-9a-zA-Z\ñ\Ñ\s]*$/);


  constructor(private el: ElementRef) {
    this.setRegexType('1');
  }

  setRegexType(documentType: string) {
    if ((documentType && documentType === '1') || documentType === null) {
      this.regex = this.regexNumber;
    } else {
      this.regex = this.regexAlphaNumeric;
    }
  }
}