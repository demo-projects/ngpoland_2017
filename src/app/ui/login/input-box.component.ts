import {Component, forwardRef, Self, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, NG_VALIDATORS, NgControl, Validators} from '@angular/forms';

@Component({
  selector : 'input-box',
  template : `
    <button (click)="value = 'yes'">yes</button>
    <button (click)="value = 'no'">no</button>
  `,
  styles   : []
})
export class InputBoxComponent implements OnInit, ControlValueAccessor, Validator {

  public _value: string;
  public _onChange = (_) => _;
  public _disabled: boolean;

  constructor(@Self() private ctrl: NgControl) {
    this.ctrl.valueAccessor = this;
  }

  ngOnInit(): void {
    const _control =  this.ctrl.control;
    _control.setValidators(Validators.required);
    _control.updateValueAndValidity();
  }

  validate(control) {
    console.log(control);
    return control.value === 'yes' ? null : {notnir: true};
  }

  set value(v){
    this._value = v;
    this._onChange(this._value);
  }

  writeValue(obj: any): void {
    this._value = obj;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }


  setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled
  }
}
