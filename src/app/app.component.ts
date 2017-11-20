import {Component} from '@angular/core';
import {ControlConfig} from './dynamic-form/control';

@Component({
  selector: 'app-root',
  template: `
    <h1>Dynamic Forms</h1>
    <dynamic-form [controls]="controls"
                  (onSent)="print($event)"></dynamic-form>
  `,
})
export class AppComponent {

  controls: ControlConfig[] = [
    {type: 'text', label: 'username:', name: 'username'},
    {type: 'password', label: 'password:', name: 'password'},
    {type: 'number', label: 'Number:', name: 'num'},
  ]

  print(value){
    console.log(value);
  }

}
