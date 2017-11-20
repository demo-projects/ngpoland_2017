import {Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Output, EventEmitter} from '@angular/core';
import {ControlConfig} from './control';
import {FormGroup, FormControl} from '@angular/forms';
import {TextFieldComponent} from './controls/text-field.component';

@Component({
  selector: 'dynamic-form',
  template: `
    <form [formGroup]="dynamicForm" 
          (ngSubmit)="onSent.emit(dynamicForm.value)">
      <ng-container #entry></ng-container>
      <button>Submit</button>
    </form>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit {

  @Input() controls: ControlConfig[];
  @Output() onSent = new EventEmitter();

  @ViewChild('entry', {read: ViewContainerRef})
  private entry: ViewContainerRef;

  public dynamicForm: FormGroup;

  constructor(private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
    this.dynamicForm = new FormGroup({});
    const controlFactory = this.cfr.resolveComponentFactory(TextFieldComponent);

    this.controls.forEach( config => {
      this.dynamicForm.addControl(config.name, new FormControl());
      const controlRef = this.entry.createComponent(controlFactory);

      controlRef.instance.group = this.dynamicForm;
      controlRef.instance.control = config;
    })
  }

}
