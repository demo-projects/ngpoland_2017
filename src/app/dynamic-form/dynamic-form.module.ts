import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormComponent} from './dynamic-form.component';
import { TextFieldComponent } from './controls/text-field.component';

@NgModule({
  imports     : [
    CommonModule,
    ReactiveFormsModule
  ],
  entryComponents: [TextFieldComponent],
  declarations: [DynamicFormComponent, TextFieldComponent],
  exports     : [DynamicFormComponent, ReactiveFormsModule]
})
export class DynamicFormModule {
}
