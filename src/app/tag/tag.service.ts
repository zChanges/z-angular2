import { Http, HttpModule, Response,URLSearchParams } from '@angular/http';
import { InterceptorService  } from 'ng2-interceptors';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { RouteService } from './../routeService';
@Injectable()
export class tagService {
    constructor(private RouteService:RouteService) {
        
    }

    getTag(){
        return [
            {value:'1',text:'Angular'},
            {value:'2',text:'Vue'},
            {value:'3',text:'React'},
            {value:'4',text:'Ionic'},
            {value:'5',text:'Rx.js'},
            {value:'6',text:'Webpakc'},
            {value:'7',text:'Gulp'},
            {value:'8',text:'Node'}
        ]
    }

}