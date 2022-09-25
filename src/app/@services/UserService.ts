import UserDbCall from "@db-operations/UserDbCall";
import { Autowired } from "sangjog";

export default class UserService {

    @Autowired
    userDbCall: UserDbCall;
 
}
