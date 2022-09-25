# Sangjog Sample Project - v0.4.0
## _(সংযোগ)The connection_
If you want to create a project, which can be `scallable`/`easy to maintain`/`api-first approach`/`loosely coople with UI`, then your first choice will be choosing Sangjog framework.
To start development you have to use [Sangjog-cli](https://www.npmjs.com/package/sangjog-cli) framework. [Sangjog-cli](https://www.npmjs.com/package/sangjog-cli) will help you to develop Sangjog App easily. This framework is perfect for working with a large team at the same time.

## Project Structure
The structure is the strict one. 

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
