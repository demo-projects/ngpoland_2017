import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, Validator} from '@angular/forms';

@Component({
  selector : 'input-box',
  providers: [
    {
      provide    : NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputBoxComponent),
      multi      : true
    }
  ],
  template : `
    <input type="text"
           [value]="_value"
           (input)="_onChange($event.target.value)"
           placeholder="type..">
  `,
  styles   : []
})
export class InputBoxComponent implements ControlValueAccessor, Validator {

  public _value: string;
  public _onChange = (_) => _;

  validate(control) {
    return control.value === 'nir' ? null : {notnir: true};
  }

  writeValue(obj: any): void {
    this._value = obj;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

}
