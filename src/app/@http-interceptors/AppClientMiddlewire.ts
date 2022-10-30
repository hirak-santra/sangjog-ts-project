import { HttpHeader, HttpRequest, HttpResponse, Middlewire } from "sangjog";
import { HttpInterceptor } from "sangjog/annotations";

@HttpInterceptor()
export default class AppClientMiddlewire implements Middlewire {
    
    request: HttpRequest;
    response: HttpResponse;

    runSync(): boolean {
        console.log('interceptor client::', this.request.moduleId)
        //console.log(this.request);
        //this.response.setHeaders(HttpHeader.PlainText);
        //console.log(this.request, this.response, 'AppMiddlewire: jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj');
        return true;
    }
}

