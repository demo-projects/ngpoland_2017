import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ControlConfig} from '../control';

@Component({
  selector: 'text-field',
  template: `
    <div [formGroup]="group">
      <label>{{ control.label }}</label>
      <input [type]="control.type"
             [formControlName]="control.name">
    </div>
  `,
})
export class TextFieldComponent {

  public group: FormGroup;
  public control: ControlConfig;

}
