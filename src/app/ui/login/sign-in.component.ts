import {Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ModalComponent} from './modal.component';

@Component({
  selector: 'sign-in',
  styles  : ['input.ng-invalid {border-color: red}'],
  template: `      
    <h2>DEMO</h2>  
    <input type="text" #input>
    <button (click)="createComponent(input.value)">create</button> 
    <button (click)="clearComponent()">destroy</button> 
    
    <ng-container #entry></ng-container>
    
      <!--<ng-container *ngComponentOutlet="dynmaicComponent"></ng-container>-->
      
  `,
})
export class SignInComponent  {

  // dynmaicComponent = ModalComponent;

  @ViewChild('entry', {read: ViewContainerRef})
  public entry: ViewContainerRef;

  constructor(private cfr:ComponentFactoryResolver) {}

  createComponent(title: string) {
    const _modalFactory =  this.cfr.resolveComponentFactory(ModalComponent);
    const _componentRef = this.entry.createComponent(_modalFactory);

    _componentRef.instance.title = title;
  }

  clearComponent(){
    this.entry.clear();
  }
}
