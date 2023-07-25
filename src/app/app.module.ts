import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomFieldComponent } from './custom-field.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFieldWrapperComponent } from './customFieldWrapper';

@NgModule({
  declarations: [
    AppComponent,
    CustomFieldComponent,
  ],
  imports: [
    BrowserModule,
    FormlyModule.forRoot({
      wrappers: [
        { 
          name: "myWrapper", 
          component: CustomFieldWrapperComponent, 
          // types: ["input"]
        }
      ], 
      types: [
        { 
          name: 'jsonEditorControl', 
          component: CustomFieldComponent,
          wrappers: ["myWrapper"],
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              language: 'json',
            },
            validation: {
              messages: {
                "invalid_code": "JSON is Invalid"
              }
            }
          },
        },
      ]
    }),
    FormlyBootstrapModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
