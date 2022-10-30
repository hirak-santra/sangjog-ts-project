import DbConnection from "@db-connection/DbConnection";
import { Autowired, DatabaseOperation } from "sangjog/annotations";

@DatabaseOperation()
export default class AdminDbCall {

    @Autowired
    connection: DbConnection;

}
