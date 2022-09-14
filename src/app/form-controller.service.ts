import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { FormModel } from './form-model';

@Injectable({
  providedIn: 'root'
})
export class FormController {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { 
    const {getErrorMessage, ...rest} = new FormModel();
    this.form = this.fb.group ({
      ...rest
    });

    this.form.getError = (control: string) => getErrorMessage(control, this.form);
  }

  handleFormControl(isFacial: boolean): void {
    if (isFacial) {
      this.form.get('document')!.disable({emitEvent: true});
    } else {
      this.form.get('facialDocument')!.disable({emitEvent: true});
    }
  }

  get customerTypeControl(): AbstractControl | null {
    return this.form.get('customerType');
  }

  get selectDocumentControl(): AbstractControl | null {
    return this.form.get('document');
  }

  get documentControl(): AbstractControl | null {
    return this.form.get('facialDocument');
  }

  get captchaControl(): AbstractControl | null {
    return this.form.get('captcha');
  }
}
