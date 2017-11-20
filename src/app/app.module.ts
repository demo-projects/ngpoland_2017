import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {DynamicFormModule} from './dynamic-form/dynamic-form.module';
import {ReactiveFormsModule} from '@angular/forms';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';

@NgModule({
  declarations: [AppComponent, TabsComponent, TabComponent],
  imports     : [
      BrowserModule,
      DynamicFormModule,
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
