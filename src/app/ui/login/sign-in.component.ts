import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'sign-in',
  styles: ['input.ng-invalid {border-color: red}'],
  template: `
      
    <!--<input-box [formControl]="username"></input-box>  -->
    
    <button (click)="submit()">send</button>
    
    <pre>{{ username.value | json}}</pre>
    <pre>{{ username.valid | json}}</pre>
      
  `,
})
export class SignInComponent implements OnInit {

  public username = new FormControl();

  constructor() {
  }

  ngOnInit() {
  }

  submit(){
    console.log(this.username.value);
  }

}
