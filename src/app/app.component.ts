import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ControlConfig} from './dynamic-form/control';

@Component({
  selector: 'app-root',
  template: `
    <h1>Dynamic Forms</h1>

    <div class="container">
      <div class="row">
        <div class="column">

          <form [formGroup]="creator"
                (ngSubmit)="create()">
            <input type="text"
                   formControlName="label"
                   placeholder="label">
            <input type="text"
                   formControlName="type"
                   placeholder="type">
            <input type="text"
                   formControlName="name"
                   placeholder="name">
            <button type="submit">create</button>
          </form>

        </div>

        <div class="column">
          <pre>{{ creator.value | json }}</pre>
        </div>

        <div class="column">
          <dynamic-form [controls]="controls"
                        (onSent)="print($event)"></dynamic-form>
        </div>


      </div>
    </div>


  `,
})
export class AppComponent {

  creator = new FormGroup({
    label: new FormControl(),
    type : new FormControl(),
    name : new FormControl()
  });

  controls: ControlConfig[] = [];

  create() {
    this.controls = [this.creator.value];
  }

  print(v){
    console.log(v);
  }

}
