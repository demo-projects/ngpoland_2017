import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>The Tabs</h1>
    
    <tabs>

      <div *tab="'tab 1'">
        <h4>This is my tab</h4>
        <p>content 1</p>
      </div>

      <div *tab="'tab 2'">
        <h4>This is my tab 2</h4>
        <p>content 2</p>
      </div>

      <h4 *tab="'tab 3'"></h4>


    </tabs>


  `,
})
export class AppComponent {


}
