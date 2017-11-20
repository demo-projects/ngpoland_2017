import {Component, OnInit, ContentChildren, QueryList} from '@angular/core';
import {TabComponent} from './tab.component';

@Component({
  selector: 'tabs',
  template: `
    <ul>
      <li *ngFor="let tab of tabs" 
          (click)="tab.activate()">{{tab.tab}}</li>
    </ul>

    <ng-content></ng-content>
  `,
  styles  : []
})
export class TabsComponent  {

  @ContentChildren(TabComponent)
  public tabs: QueryList<TabComponent>;

  activate() {

  }


}
