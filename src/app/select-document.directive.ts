import { Directive, ElementRef, HostListener } from '@angular/core';

const typesRegex: any = {
  numeric: (value: string): boolean => new RegExp(/^[0-9]+$/).test(value),
  alphaNumeric: (value: string): boolean => {
    return new RegExp(/^[0-9a-zA-ZñÑ\s]*$/).test(value)
  },
};


@Directive({
  selector: '[appSelectDocument]'
})
export class SelectDocumentDirective {

  // private defaultRegex: string;

  // private lastValue: string;

  // private tagElement: string;

  // private isClipboard = false;

  // constructor(
  //   private elementRef: ElementRef
  // ) {
  //   // super();
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  //   this.tagElement = String(this.elementRef.nativeElement.localName);
  //   // const documentType = this.getItem('vit', 'string') || null;
  //   const documentType = '1' || null;

  //   if ((documentType && documentType === '1') || documentType === null) {
  //     this.defaultRegex = 'numeric';
  //   } else {
  //     this.defaultRegex = 'alphaNumeric';
  //   }
  // }

  // @HostListener('ctrlPaste', ['$event.detail'])
  // onCtrlPaste($event: ClipboardEvent): boolean {
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  //   const selectValue = this.elementRef.nativeElement.ctrlValue.selectValue;

  //   const inputValueLenght =
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  //     this.elementRef.nativeElement.ctrlValue.inputValue.length;

  //   const activeEl = document.activeElement as HTMLInputElement;
  //   const whereIsSelection = (activeEl.selectionStart === activeEl.selectionEnd)
  //     ? activeEl.selectionStart : 0;

  //   let copiedText = $event.clipboardData.getData('text').replace(/\s/g, '');
  //   this.isClipboard = true;

  //   if (selectValue === '1') {
  //     copiedText = copiedText.replace(/[^0-9]/g, '');
  //     return !(inputValueLenght > 7 && whereIsSelection> 7)
  //       ? false : typesRegex[this.defaultRegex](copiedText);
  //   } else {
  //     copiedText = copiedText.replace(/[^a-z0-9]/gi, '').toUpperCase();
  //     return !(inputValueLenght > 9 && whereIsSelection > 9)
  //       ? false : typesRegex[this.defaultRegex].test(copiedText);
  //   }    
  // }

  // @HostListener('dragover', ['$event.detail'])
  // onCtrlDrag = (): boolean => false;

  // @HostListener('ctrlChange', ['$event'])
  // // eslint-disable-next-line
  // onCtrlChange($event: any): void {
  //   if (
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  //     this.tagElement === String($event.target.localName)
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  //     && JSON.stringify($event.detail) !== JSON.stringify(this.lastValue)
  //   ) {
  //     this.defaultRegex =
  //       // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  //       $event.detail.selectValue === '1'? 'numeric' : 'alphaNumeric';
  //   }
  // }
  // @HostListener('textInput', ['$event'])
  // // eslint-disable-next-line
  // onTextInput($event: any): boolean {
  //   const inputValueLenght =
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  //     this.elementRef.nativeElement.ctrlValue.inputValue.length;

  //   const activeEl = document.activeElement as HTMLInputElement;
  //   const seletedLenght = activeEl.value.slice(
  //     activeEl.selectionStart,
  //     activeEl.selectionEnd
  //   ).length;

  //   const whereIsSelection = (activeEl.selectionStart === activeEl.selectionEnd)
  //     ? activeEl.selectionStart : 0;
    
  //   return (inputValueLenght > 7 && whereIsSelection > 7 && seletedLenght < 1)
  //     ? false : this.isValid($event.data);
  // }

  // private isValid(value: string): boolean {
  //   if (value.charCodeAt(0) === 32) {
  //     return false;
  //   }

  //   return typesRegex[this.defaultRegex](value);
  // }

}
