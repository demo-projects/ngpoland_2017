import { BrowserModule } from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER, APP_BOOTSTRAP_LISTENER} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {HttpLoggerModule} from './http-logger/http-logger.module';
import {FLAG} from './http-logger/tokens';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpLoggerModule.setup(true),],
  providers: [{
    provide: APP_BOOTSTRAP_LISTENER,
    useValue: (cref) => console.log(cref),
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
