import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ManageCrisisComponent } from './manage-crisis.component';
import { ManageHeroesComponent } from './manage-heroes.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdminDashboardComponent, ManageCrisisComponent, ManageHeroesComponent]
})
export class AdminModule { }
