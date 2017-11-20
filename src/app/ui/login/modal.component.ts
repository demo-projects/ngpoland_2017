import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal',
  template: `
    <h2>{{ title }}</h2>
  `,
  styles: []
})
export class ModalComponent  {
  public title = "DEFAULT"
}
