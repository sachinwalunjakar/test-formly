import { AfterViewInit, Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { CustomFieldComponent } from './custom-field.component';

@Component({
  selector: 'app-custom-field-wrapper',
  template: `
    <div style="background-color: green;">
      {{ to['label_value'] }} : 
      <ng-container #fieldComponent></ng-container>
    </div>
  `,
})
export class CustomFieldWrapperComponent extends FieldWrapper implements AfterViewInit {

  ngAfterViewInit(): void {
    let component = (<any> this.fieldComponent) as CustomFieldComponent;
  }
}