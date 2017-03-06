import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { RouteService } from './../routeService';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
@Injectable()
export class loginService {
    constructor(private RouteService:RouteService,private http:Http) { 

    }
    login(userName:string,passWord:string){
        return this.http.post(this.RouteService.getUrl("User/login"),{
            userName:userName,
            passWord:passWord
        }).map((res:Response) => res.json())
    }
}