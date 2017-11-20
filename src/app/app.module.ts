import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {DynamicFormModule} from './dynamic-form/dynamic-form.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports     : [
      BrowserModule,
      DynamicFormModule,
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
