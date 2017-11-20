import {Component, OnInit, SkipSelf, Self} from '@angular/core';
import {ListService} from './list.service';

@Component({
  selector : 'list',
  providers: [ListService],
  template : `
    <input type="text"
           (keydown.enter)="addItem($event.target.value)">
    <ul>
      <li *ngFor="let item of list.items">{{item.title}}</li>
    </ul>
  `,
})
export class ListComponent implements OnInit {

  constructor(@Self() public list: ListService,
              @SkipSelf() public adminList: ListService) {
  }

  addItem(title) {
    this.list.addItem(title);
    this.adminList.addItem(title);
  }

  ngOnInit() {
  }

}
