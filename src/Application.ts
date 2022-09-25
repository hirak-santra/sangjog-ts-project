import OwnerController from '@controllers/OwnerController';
import UserController from '@controllers/UserController';
import UserDbCall from '@db-operations/UserDbCall';
import DbConnection from '@db-connection/DbConnection';
import AppMiddlewire from '@http-interceptors/AppMiddlewire';
import AuthService from '@services/AuthService';
import UserService from '@services/UserService';
import { AppConfiguration } from 'sangjog';

@AppConfiguration({
    controllers: [UserController, OwnerController],
    services: [UserService],
    authentication: AuthService,
    httpInterceptors: [AppMiddlewire],
    dbCalls: [UserDbCall],
    dbConnection: DbConnection
})
export default class Application {

    public static main(arg: string[]) {

    }

}
