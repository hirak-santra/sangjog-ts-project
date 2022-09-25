import { HttpHeader, HttpRequest, HttpResponse, Middlewire } from "sangjog";

export default class AppMiddlewire implements Middlewire {
    
    request: HttpRequest;
    response: HttpResponse;

    runSync(): boolean {
        //console.log(this.request);
        //this.response.setHeaders(HttpHeader.PlainText);
        //console.log(this.request, this.response, 'AppMiddlewire: jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj');
        return true;
    }
}

