import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
