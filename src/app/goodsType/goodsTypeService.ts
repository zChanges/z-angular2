import { Http, HttpModule, Response,URLSearchParams } from '@angular/http';
import { InterceptorService  } from 'ng2-interceptors';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { RouteService } from './../routeService';
@Injectable()
export class GoodsTypeService {
    constructor(private RouteService:RouteService,private http:InterceptorService) {
        
    }

    getList(name: string,  skip: number, count: number){
        return this.http.get(this.RouteService.getUrl("GoodsType/GetList?name={{name}}&skip={{skip}}&count={{count}}",{
            name:name,
            skip:skip,
            count:count
        })).map((res:Response)=>res.json());
    }
    
    add(name:string,remarks:string){
        // let data = new URLSearchParams();
        // var json = JSON.stringify({"name":name,"remarks":remarks});
        // data.set('json',json);
        return this.http.post(this.RouteService.getUrl("GoodsType"),{
            name:name,
            remarks:remarks
        });

    }
}