import { EnvDataSettings, HttpRequest, HttpResponse } from "sangjog";
import { ApiService, AuthMethod, EnvSettings } from "sangjog/annotations";

@ApiService()
export default class AdminAuthService {

    @EnvSettings("data")
    dataSettings: EnvDataSettings;

    userBn: any = {
        id: 1
    }

    @AuthMethod()
    getAuthenticated(req: HttpRequest, res: HttpResponse, next: Function) {
        console.log('in Admin Auth', req.moduleId);
        //console.log(req, res, 'AuthService: ffffffffffffffffffffffffffffff')
        next(this);
    }
}
