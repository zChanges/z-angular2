import { Response } from '@angular/http';
import { Headers } from '@angular/http';

import { Interceptor, InterceptedRequest, InterceptedResponse } from 'ng2-interceptors';

export class configInterceptor implements Interceptor {
    public interceptBefore(request: InterceptedRequest): InterceptedRequest {
        let loginData = JSON.parse(window.sessionStorage.getItem("loginData"));
        if(loginData){ request.options.headers.append('Authorization',"Bearer "+ loginData.jwtToken)}
        return request;
    }

    public interceptAfter(response: InterceptedResponse): InterceptedResponse {
        let Response = response.response.json();
        if(!Response.success){
          // return Promise.reject(response)
        }
        
        return response;
    }
}
