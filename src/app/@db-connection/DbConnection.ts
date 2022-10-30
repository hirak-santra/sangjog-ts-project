import { EnvDbSettings } from "sangjog";
import { DatabaseConnection, EnvSettings } from "sangjog/annotations";

@DatabaseConnection()
export default class DbConnection {

    @EnvSettings("db")
    dbSettings: EnvDbSettings;

}
