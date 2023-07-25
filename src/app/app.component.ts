import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <formly-form [model]="model" [fields]="fields" [form]="form"></formly-form>
      <button type="submit">Submit</button>
      hello world
    </form> 
  `,
})
export class AppComponent {
  form = new FormGroup({});
  model = {};
  fields = [
    {
      key: 'firstName',
      type: 'jsonEditorControl',
      wrappers: ['myWrapper'],
      templateOptions: {
        label_value: "input label"
      }
    },
    // {
    //   key: 'secondName',
    //   type: 'input',
    // },
    // Add more fields here as needed.
  ];

  onSubmit() {
    if (this.form.valid) {
      console.log(this.model);
      // Handle form submission here
    }
  }
}
