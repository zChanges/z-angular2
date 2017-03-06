import { Injectable } from '@angular/core';
var Mustache  = require('./../../node_modules/mustache/mustache.min.js');

@Injectable()
export class RouteService {
    baseUrl:string;

    constructor() { 
        this.baseUrl = "http://192.168.0.9:888/df/";
    }

    getBaseUrl() {
        return this.baseUrl;
    }

    getUrl(url: string, value?: any) {
        let result = Mustache.render(this.baseUrl + url, value);
        return result;
    }
    
}
