import UserService from "@services/UserService";
import { HttpHeader, HttpMethod, HttpRequest, HttpResponse } from "sangjog";
import { ApiController, ApiMapping, Autowired } from "sangjog/annotations";

@ApiController({
    path: "/user",
    version: 0
})
export default class UserController {

    @Autowired 
    userService: UserService;

    //Get all list of user.
    @ApiMapping({ path: '/list', method: HttpMethod.GET, produces: HttpHeader.Json })
    getUserList(req: HttpRequest, res: HttpResponse) {
        res.setStatusCode(200);
        res.sendResponse({body: "Hello World!"});
        console.log('in getUserList method!!!!!!!!!!!!!!!!!!!!!!!');
    }

}
