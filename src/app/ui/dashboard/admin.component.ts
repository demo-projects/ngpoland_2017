import {Component, OnInit} from '@angular/core';
import {ListService} from './list.service';

@Component({
  selector: 'admin',
  template: `
    <div class="container">
      <button (click)="list.logItems()">log</button>
      <pre>{{ list.items | json }}</pre>
      
      <div class="row">
        <div class="column">
          <list></list>
        </div>
        <div class="column">
          <list></list>
        </div>
      </div>
    </div>
  `,
  styles  : []
})
export class AdminComponent implements OnInit {

  constructor(public list: ListService) {

  }

  ngOnInit() {
  }

}
