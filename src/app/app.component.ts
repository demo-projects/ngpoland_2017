import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `      
      <h1>Welcome to {{title}}!</h1>
      <a routerLink="dashboard">dashboard</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('').subscribe()
  }
}
