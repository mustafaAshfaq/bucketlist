import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthGuardService } from '../auth-guard.service';
import { AuthService } from '../auth.service';
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'login', component:LoginComponent
            }
        ]),
        
    ],
    exports: [RouterModule],
    providers: [AuthGuardService, AuthService]
})
export class LoginRoutingModule { }
