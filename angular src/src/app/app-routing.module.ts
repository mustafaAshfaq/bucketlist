import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ViewListComponent } from './view-list/view-list.component';
import { HeroListComponent } from './hero/hero-list.component';
import { HeroDetailComponent } from './hero/hero-detail.component'
import { ComposeMessageComponent } from './compose-message.component';
import { AuthGuardService } from './auth-guard.service';
import { SelectivePreloadStrat } from './selective-preload-strat';
const routes: Routes = [
    { path: 'task', component: ViewListComponent },
    { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
   // { path: 'heroes', component: HeroListComponent },
    //{ path: 'hero/:id', component:HeroDetailComponent },
    { path: '', redirectTo: '/crisis-center', pathMatch: 'full' },
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },//
    { path: 'crisis-center', loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule', data: {preload:true}}
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: SelectivePreloadStrat })],
    exports: [RouterModule], providers: [SelectivePreloadStrat]
})

export class AppRoutingModule { }