import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ManageCrisisComponent } from './manage-crisis.component';
import { ManageHeroesComponent } from './manage-heroes.component';
import { AuthGuardService } from '../auth-guard.service';
const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                canActivateChild: [AuthGuardService],
                children: [
                    { path: '', component: AdminDashboardComponent },
                    { path: 'crisis', component: ManageCrisisComponent },
                    { path: 'heroes', component: ManageHeroesComponent },
                ]

            },
            

        ],
        canActivate: [AuthGuardService]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class AdminRoutingModule { }
