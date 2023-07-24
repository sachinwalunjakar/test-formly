import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-custom-field-wrapper',
  template: `
    <div class="custom-field-wrapper">
      <label>{{ to.label }}</label> : 
      <ng-container #fieldComponent></ng-container>
      <!-- You can add any additional HTML elements or styles here -->
    </div>
  `,
})
export class CustomFieldWrapperComponent extends FieldWrapper {
}