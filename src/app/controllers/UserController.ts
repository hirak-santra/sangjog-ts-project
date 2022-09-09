import AuthService from "@services/AuthService";
import UserService from "@services/UserService";
import { Autowired, HttpHeader, HttpMethod, HttpRequest, HttpResponse, ApiMapping, ApiController } from "sangjog";

@ApiController({
    path: "/user",
    version: 0
})
export default class UserController {

    @Autowired 
    userService: UserService;

    //Get all list of owners.
    @ApiMapping({ path: '/list', method: HttpMethod.GET, produces: HttpHeader.Json })
    getUserList(req: HttpRequest, res: HttpResponse) {
        res.setStatusCode(200);
        res.send({body: "Hello World!"});
        console.log('in getUserList method!!!!!!!!!!!!!!!!!!!!!!!');
    }

    //get an owner by owner id.
    @ApiMapping({ path: 'list/:id', method: HttpMethod.GET })
    getUser(req: HttpRequest, res: HttpResponse) {
        console.log(req, res, 'getOwner')
    }

}
