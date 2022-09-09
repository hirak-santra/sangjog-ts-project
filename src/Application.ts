import OwnerController from '@controllers/OwnerController';
import UserController from '@controllers/UserController';
import OwnerDbCall from '@db-calls/UserDbCall';
import DbConnection from '@db/DbConnection';
import AppMiddlewire from '@middlewires/AppMiddlewire';
import AuthService from '@services/AuthService';
import UserService from '@services/UserService';
import { AppConfiguration } from 'sangjog';

@AppConfiguration({
    controllers: [UserController, OwnerController],
    services: [UserService],
    authentication: AuthService,
    middlewires: [AppMiddlewire],
    dbCalls: [OwnerDbCall],
    dbConnection: DbConnection
})
export default class Application {

    public static main(arg: string[]) {

    }

}
