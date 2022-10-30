import { HttpHeader, HttpRequest, HttpResponse, Middlewire } from "sangjog";
import { HttpInterceptor } from "sangjog/annotations";

@HttpInterceptor()
export default class AppMiddlewire implements Middlewire {
    
    request: HttpRequest;
    response: HttpResponse;

    runSync(): boolean {
        console.log('interceptor common::', this.request.moduleId)
        return true;
    }
}

