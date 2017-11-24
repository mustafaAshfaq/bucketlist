import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisService } from './crisis.service';
@NgModule(
    {
        imports: [FormsModule, CommonModule, CrisisCenterRoutingModule],
        declarations: [CrisisCenterComponent, CrisisCenterHomeComponent, CrisisListComponent, CrisisDetailComponent],
        providers: [CrisisService]
    }
)
export class CrisisCenterModule { }