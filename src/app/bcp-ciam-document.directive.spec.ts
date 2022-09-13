import { Component, DebugElement, ElementRef, Injectable } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BcpCiamDocumentDirective } from './bcp-ciam-document.directive';
const docTypes = [
  {
    key: '1',
    name: 'DNI',
    description: 'Documento Nacional de Identidad',
    regex: '^[0-9]{8}$',
    maxLength: 8,
  },
  {
    key: '3',
    name: 'CE',
    description: 'Carné de Extranjería',
    regex: '^[A-Z0-9]{7,10}$',
    maxLength: 10,
  },
];
@Component({
  template: `
    <input
      #dropdownInput
      mydirective
      type="text"
      minlength="7"
      maxlength="10"
    />
  `,
})
export class DirectiveHostComponent {}

const mockElementRef: any = {
  nativeElement: {
    localName: ''
  }
};



fdescribe('@BcpCiamDocumentDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BcpCiamDocumentDirective, DirectiveHostComponent],
      providers: [
        {
          provide: ElementRef,
          useValue: mockElementRef,
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  }));
  it('Prueba 1', () => {
    let de = fixture.debugElement.queryAll(By.css('input'))[0];
    let directive = de.injector.get(BcpCiamDocumentDirective);   

    expect(directive.setRegexType('1')).toBeTruthy();
  });
});
