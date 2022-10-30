import { HttpMethod, HttpRequest, HttpResponse } from "sangjog";
import { ApiController, ApiMapping } from "sangjog/annotations";

@ApiController({
    path: '/user',
    version: 0
})
export default class AdminController {
    
    @ApiMapping({path: '/', method: HttpMethod.GET})
    getAdminUser(req: HttpRequest, res: HttpResponse) {
        res.sendResponse({})
    }

    @ApiMapping({path: '/', method: HttpMethod.POST})
    addAdminUser(req: HttpRequest, res: HttpResponse) {
        res.sendResponse({})
    }
}