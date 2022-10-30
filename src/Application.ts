import DbConnection from '@db-connection/DbConnection';
import ClientModule from './app/ClientModule';
import AdminModule from './app/AdminModule';
import CommonAuthService from "@services/CommonAuthService";
import { AppConfiguration } from 'sangjog/annotations';

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
