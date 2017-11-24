import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CanDeactivateGuardService } from '../can-deactivate-guard.service';
import { CrisisListResolver } from './crisis-list-resolver.service';
const crisisCenterRoutes: Routes = [
    {
        path: '',
        component: CrisisCenterComponent,
        children: [
            {
                path: '',
                component: CrisisListComponent,
                resolve: { crisisList: CrisisListResolver },
                children: [
                    {
                        path: ':id',
                        component: CrisisDetailComponent,
                        canDeactivate:[CanDeactivateGuardService]
                    },
                    {
                        path: '',
                        component: CrisisCenterHomeComponent
                    }
                ]
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(crisisCenterRoutes)],
    exports: [RouterModule], providers: [CanDeactivateGuardService, CrisisListResolver]
})
export class CrisisCenterRoutingModule {
}