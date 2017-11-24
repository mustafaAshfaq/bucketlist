import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesModule } from './hero/hero.module';
//import { CrisisCenterModule } from './crisis-center/crisis-center.module';
//import { AdminModule } from './admin/admin.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AddListComponent } from './add-list/add-list.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ComposeMessageComponent } from './compose-message.component';
//import { HeroListComponent } from './hero/hero-list.component';
//import { HeroDetailComponent } from './hero/hero-detail.component';
import { ListService } from './services/list.service';
import { LoginComponent } from './login/login.component';
import { DialogService } from './dialog.service';

@NgModule({
    declarations: [

      AppComponent,
        AddListComponent,
        ViewListComponent, ComposeMessageComponent, LoginComponent
        //HeroListComponent, HeroDetailComponent
  ],
  imports: [
      BrowserModule,HttpModule,
      FormsModule,
      BrowserAnimationsModule, NgbModule.forRoot(),
      HeroesModule,// CrisisCenterModule, AdminModule,
      LoginRoutingModule,
      AppRoutingModule,
      
    ],
    providers: [ListService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
