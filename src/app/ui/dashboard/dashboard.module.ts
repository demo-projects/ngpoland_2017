import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AdminComponent } from './admin.component';
import { ListComponent } from './list.component';
import {ListService} from './list.service';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  providers: [ListService],
  declarations: [DashboardComponent, AdminComponent, ListComponent]
})
export class DashboardModule { }
