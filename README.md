# Sangjog Typescript Sample Project - v1.0.0
## _(সংযোগ)The connection_
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
