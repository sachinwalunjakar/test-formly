import { AfterViewInit, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-custom-field',
  template: "input field",
})
export class CustomFieldComponent extends FieldType implements AfterViewInit {

  ngAfterViewInit(): void {
    setTimeout(() => {
     this.formControl.markAsTouched();
     this.formControl.setErrors({"invalid_code": true}); 
    }, 500);
  }
}
