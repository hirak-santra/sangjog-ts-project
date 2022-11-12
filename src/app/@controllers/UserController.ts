import UserService from "@services/UserService";
import { HttpHeader, HttpMethod, HttpRequest, HttpResponse } from "sangjog";
import { ApiController, ApiMapping, Autowired, JsonData, JsonObject } from "sangjog/annotations";

@ApiController({
    path: "/user",
    version: 0
})
export default class UserController {

    @Autowired 
    userService: UserService;

    @JsonData('mockData') mockData: JsonObject;

    //Get all list of user.
    @ApiMapping({ path: '/list', method: HttpMethod.GET, produces: HttpHeader.Json })
    getUserList(req: HttpRequest, res: HttpResponse) {
        try {
            res.setStatusCode(200);
            res.sendResponse({body: this.mockData});
            console.log('in getUserList method!!!!!!!!!!!!!!!!!!!!!!!');
        } catch(e) {
            console.log(e)
        }
        
    }

}
