import { AppDbSettings, AppSettings } from "sangjog";

export default class DbConnection {

    @AppSettings("dbConfig")
    dbSettings: AppDbSettings;

}
