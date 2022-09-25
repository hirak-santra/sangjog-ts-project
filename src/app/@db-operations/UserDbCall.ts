import DbConnection from "@db-connection/DbConnection";
import { Autowired } from "sangjog";

export default class UserDbCall {

    @Autowired
    connection: DbConnection;
    
}
