import { waitForAsync } from '@angular/core/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: ` <p highlight="cyan">Cyan</p>
    <p highlight>Yellow</p>`,
})
export class DirectiveHostComponent {}

xdescribe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveHostComponent, HighlightDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  

  it('should use directive method to test a method', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[1];
    let directive = de.injector.get(HighlightDirective);   

    expect(directive.isPostiveNumber(-10)).toBeFalsy();
    expect(directive.isPostiveNumber(50)).toBeTruthy();
  });
});
