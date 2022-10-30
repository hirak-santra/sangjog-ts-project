import { EnvDataSettings, HttpRequest, HttpResponse } from "sangjog";
import { ApiService, AuthMethod, EnvSettings } from "sangjog/annotations";

@ApiService()
export default class AuthService {

    @EnvSettings("data")
    dataSettings: EnvDataSettings;

    userBn: any = {
        id: 23424
    }

    @AuthMethod()
    getAuthenticated(req: HttpRequest, res: HttpResponse, next: Function) {
        console.log('in Client Auth', req.moduleId);
        //console.log(req, res, 'AuthService: ffffffffffffffffffffffffffffff')
        next(this);
    }
}
