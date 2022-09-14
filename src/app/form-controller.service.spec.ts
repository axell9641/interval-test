import { TestBed } from '@angular/core/testing';

import { FormController } from './form-controller.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

fdescribe('FormControllerService', () => {
  let service: FormController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
      providers: [FormController],
    });
    service = TestBed.inject(FormController);
  });

  it('should disable document control when isFacil is true', () => {
    const documentCtrol = service.selectDocumentControl;

    service.handleFormControl(true);

    expect(documentCtrol?.disabled).toBeTruthy();
  });

  it('should disable facialDocument control when isFacil is false', () => {
    const documentCtrol = service.documentControl;

    service.handleFormControl(false);

    expect(documentCtrol?.disabled).toBeTruthy();
  });

  it('should get an error object when validations are not met for captcha control', () => {
    const control = service.captchaControl;
    
    control?.setValue(null);
    control?.markAsTouched();
    const controlError = service.form.getError('captcha');

    expect(controlError).toEqual({ state: 'error', error: true });
  });

  it('should return a value for customerType when getter is invoked', () => {
    const control = service.customerTypeControl;

    expect(control).toBeTruthy();
  });

  it('should return a value for captcha when getter is invoked', () => {
    const control = service.captchaControl;

    expect(control).toBeTruthy();
  });
});
