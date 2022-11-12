# Sangjog Typescript Sample Project - v1.0.0
## _(সংযোগ | संजोग)The connection_
If you want to create a project, which can be `scallable`/`easy to maintain`/`api-first approach`/`loosely coople with UI`, then your first choice will be choosing Sangjog framework.
To start development you have use [Sangjog-cli](https://www.npmjs.com/package/sangjog-cli) framework. [Sangjog-cli](https://www.npmjs.com/package/sangjog-cli) will help you to develop Sangjog App easily. This framework is perfect for working with a large team at the same time.

## Features
- API First Approach
- Best for `SPA`
- Simple Config control for `HTTP and HTTPS enabling`
- `Strict Structural` Framework
- Sangjog Project is built on `Typescript`
- `Object oriented` and `type safe` project
- [Spring(JAVA framework)](https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/mvc.html)/[Angular](https://angular.io/start) like `Annotation based` Project and API configuration
- By default, Project `configuration data` in `.env file`
- `Modular` structure
- `Modules` are the entry of the Application
- `API Controllers` folder and classes
- `API services`  folder and classes
- `DB Oparations`  folder and classes
- `DB Connection`  folder and classes
- `HTTP Syncronus Interceptors` like middlewire
- Single point `Async Authentication and Authorization` service instance for every request
- `Singletone of controller, service, db-oparator, db-connection and httpInterceptor` classes by default.
- `Versioning of API` is the required rule for Sangjog
- `Strict folder structure` which will help the multiple team to work on a same project easily.
- Seperate `UI Folder` which is configurable
- Developers can work in parallel
- Reduce the cost of app development
- Reduce the risk of failure
- Taken less time


## Run
Sangjog requires [Node.js](https://nodejs.org/) v12+ to run.

After project creation and installation you can run the project in dev mode. In this mode, file changes will be automatically traced.
```sh
C:\node\projects\sample-project-name>sng dev
```
For production, you have to build first by the below command. After build one directory named "build" will be generated. 
After that run `sng start` to start the application.
```sh
C:\node\projects\sample-project-name>sng build
```
```sh
C:\node\projects\sample-project-name>sng start
```

## Doc
### Application
Sample Code:
```
@AppConfiguration({
    modules: [
        {
            id: "client",
            apiDomainPath: '/api/client',
            uiSourcePath: '/ui/client/WebContent',
            uiServerPath: '/',
            module: ClientModule
        },
        {
            id: "admin",
            apiDomainPath: '/api/admin',
            isAdmin: true,
            uiSourcePath: '/ui/admin/build',
            uiServerPath: '/admin',
            module: AdminModule
        }
    ],
    auth: CommonAuthService,
    dbConnection: [DbConnection]
})
export default class Application {
    public static main(arg: string[]) {

    }
}
```
Here you are registering the `modules`, `auth`, `database connection` and root paths of `API` and `UI` of the application.
### Module
Sample Code:
```
@AppModule({
    controllers: [UserController, OwnerController],
    services: [UserService],
    dbCalls: [UserDbCall],
    dtos: [UserDTO]
})
export default class ClientModule {}
```
Here you are registering `controllers`, `services`, `database call` and `dtos` of the `ClientModule`. 
### Controller
Sample Code:
```
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
```
This is a controller class.
### API Creation
Sample Code:
```
@ApiMapping({ path: '/list', method: HttpMethod.GET, produces: HttpHeader.Json })
getUserList(req: HttpRequest, res: HttpResponse) {
    res.setStatusCode(200);
    res.sendResponse({body: "Hello World!"});
    console.log('in getUserList method!!!!!!!!!!!!!!!!!!!!!!!');
}
```
### Service
Sample Code:
```
@ApiService()
export default class UserService {

    @Autowired
    userDbCall: UserDbCall;
 
}
```
### Database Call
Sample Code:
```
@DatabaseOperation()
export default class UserDbCall {

    @Autowired
    connection: DbConnection;
    
}
```
### Database Connection
Sample Code:
```
@DatabaseConnection()
export default class DbConnection {

    @EnvSettings("db")
    dbSettings: EnvDbSettings;

}
```
### Auth Service
Sample Code:
```
@ApiService()
export default class CommonAuthService {

    @EnvSettings("data")
    dataSettings: EnvDataSettings;

    userBn: any = {
        id: 1
    }

    @AuthMethod()
    getAuthenticated(req: HttpRequest, res: HttpResponse, next: Function) {
        console.log('in common Auth', req.moduleId);
        //console.log(req, res, 'AuthService: ffffffffffffffffffffffffffffff')
        next(this);
    }
}
```
### Http Interceptor
Sample Code:
```
@HttpInterceptor()
export default class AppMiddlewire implements Middlewire {
    
    request: HttpRequest;
    response: HttpResponse;

    runSync(): boolean {
        console.log('interceptor common::', this.request.moduleId)
        return true;
    }
}
```
### Register API URL
Now you can hit the API with the below url:
`http://localhost:8080/api/client/v0/user/list`
`http://localhost:8080/api/admin/v0/user`
and UI:
`http://localhost:8080`
`http://localhost:8080/admin`


