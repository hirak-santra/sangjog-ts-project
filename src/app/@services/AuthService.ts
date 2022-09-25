import { AppDataSettings, AppSettings, Authenticate, HttpRequest, HttpResponse } from "sangjog";

export default class AuthService {

    @AppSettings("appData")
    dataSettings: AppDataSettings;

    userBn: any = {
        id: 23424
    }

    @Authenticate({
        matchPath: '/api/*'
    })
    getAuthenticated(req: HttpRequest, res: HttpResponse, next: Function) {
        //console.log(req, res, 'AuthService: ffffffffffffffffffffffffffffff')
        next(this);
    }
}
