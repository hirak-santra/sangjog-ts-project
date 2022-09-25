import { HttpHeader, HttpMethod, HttpRequest, HttpResponse, ApiMapping, ApiController } from "sangjog";

@ApiController({
    path: "/owner",
    version: 0
})
export default class OwnerController {

    //Get all list of owners.
    @ApiMapping({ path: '/ownerList/list', method: HttpMethod.GET })
    getOwnerList(req: HttpRequest, res: HttpResponse) {
        //console.log(req)
        res.setStatusCode(200);
        res.sendResponse({body: "/ownerList/list = Hello World!"});
        //console.log('in getUserList method!!!!!!!!!!!!!!!!!!!!!!!');
    }

    //get an owner by owner id.
    @ApiMapping({ path: '/:ownerId/:address', method: HttpMethod.GET })
    getOwner(req: HttpRequest, res: HttpResponse) {
        //console.log(req, res, 'getOwner');
        res.setStatusCode(200);
        res.sendResponse({body: "/:ownerId/:address = Hello World!"});
    }

    //Get all list of owners.
    @ApiMapping({ path: '/owner-test/list', method: HttpMethod.GET})
    getOwnerLocation(req: HttpRequest, res: HttpResponse) {
        try{
            res.setStatusCode(200);
            res.sendResponse({body: "/owner-test/list = Hello World!"});
        } catch (e) {
            console.log(e)
        }
        //console.log(req);
    }

    //Get all list of owners.
    @ApiMapping({ path: '/owner-test/:test', method: HttpMethod.GET})
    getOwnerTitle(req: HttpRequest, res: HttpResponse) {
        //console.log(req)
        res.setStatusCode(200);
        res.sendResponse({body: "/owner-test/:test = Hello World!"});
        //console.log('in getUserList method!!!!!!!!!!!!!!!!!!!!!!!');
    }

    //get an owner by owner id.
    @ApiMapping({ path: '/test', method: HttpMethod.POST })
    getOwnerTest(req: HttpRequest, res: HttpResponse) {
        res.setStatusCode(200);
        res.sendResponse({body: "/test = Hello World!"});
        //console.log(req, res, 'getOwner')
    }

    //Get all list of owners.
    @ApiMapping({ path: '/owner-test/:list/:hek', method: HttpMethod.GET})
    getOwnerMike(req: HttpRequest, res: HttpResponse) {
        //console.log(req)
        res.setStatusCode(200);
        res.sendResponse({body: "/owner-test/:list/:hek = Hello World!"});
        //console.log('in getUserList method!!!!!!!!!!!!!!!!!!!!!!!');
    }

    //Get all list of owners.
    @ApiMapping({ path: '/:fig', method: HttpMethod.GET, produces: HttpHeader.Json })
    getOwnerJeans(req: HttpRequest, res: HttpResponse) {
        //console.log(req)
        res.setStatusCode(200);
        res.sendResponse({body: "/:fig = Hello World!"});
        //console.log('in getUserList method!!!!!!!!!!!!!!!!!!!!!!!');
    }

}
