import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfigOption } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
})
export class AppComponent {
  form = new FormGroup({});
  model = {};
  fields = [
    {
      key: 'firstName',
      type: 'jsonEditorControl',
      templateOptions: {
        label: "input label"
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
