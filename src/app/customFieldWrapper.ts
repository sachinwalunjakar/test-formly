import { AfterViewInit, Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-custom-field-wrapper',
  template: `
    <span style="background-color: yellow;">
      <ng-container #fieldComponent></ng-container>
    </span>
    <br>
  `,
})
export class CustomFieldWrapperComponent extends FieldWrapper implements AfterViewInit {

  ngAfterViewInit(): void {
  }
}