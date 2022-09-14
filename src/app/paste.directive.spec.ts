import { waitForAsync } from '@angular/core/testing';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { PasteDirective } from './paste.directive';

@Component({
  template: `<input type="text" pasteDirective />`,
})
export class DirectiveHostComponent {}

fdescribe('PasteDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveHostComponent, PasteDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  it('should capitalize pasted string', () => {
    let de = fixture.debugElement.query(By.css('input'));   
    const dataTransfer = new DataTransfer();
    const pasteEvent = new ClipboardEvent('paste', {clipboardData: dataTransfer});    
    pasteEvent.clipboardData.setData('text/plain', 'test');

    de.nativeElement.dispatchEvent(pasteEvent);
    fixture.detectChanges();

    expect(de.nativeElement.value).toEqual('TEST');
  });
});
