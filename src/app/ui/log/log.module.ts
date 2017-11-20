import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogRoutingModule } from './log-routing.module';
import { LogComponent } from './log.component';

@NgModule({
  imports: [
    CommonModule,
    LogRoutingModule
  ],
  declarations: [LogComponent]
})
export class LogModule { }
