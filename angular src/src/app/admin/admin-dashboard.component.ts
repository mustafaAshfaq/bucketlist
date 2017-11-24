import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { SelectivePreloadStrat } from '../selective-preload-strat';
@Component({
  templateUrl:  './admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit {
    sessionId: Observable<string>;
    token: Observable<string>;
    modules: string[];
    constructor(private route: ActivatedRoute,private preload: SelectivePreloadStrat) {
    }

    ngOnInit() {
        this.sessionId = this.route.queryParamMap.map(queryParam => queryParam.get('session_id') || 'none');
        this.token = this.route.fragment.map(fragments => fragments || 'none');
        this.modules = this.preload.preloadModules;
    }
}