import { Validators, FormGroup } from '@angular/forms';
export interface ErrorMsg {
  state: string;
  error: string;
}

export class FormModel {
  customerType = ['1', Validators.required];
  document = ['', { Validators: [Validators.required] }];

  facialDocument = [
    '',
    [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(8),
      Validators.pattern(/^[0-9]+$/),
    ],
  ];

  captcha = ['', [Validators.required]];

  getErrorMessage(control: string, form: FormGroup): ErrorMsg {
    const message: ErrorMsg = { state: '', error: '' };
    const { touched, dirty, errors } = form?.get(control) || {};
    debugger;

    if ((!touched && !dirty) || !errors || !form?.get(control)) {
      return message;
    }


    Object.keys(errors).forEach((key) => {
      message.error = errors[key];
      message.state = 'error';
    });

    return message;
  }
}
