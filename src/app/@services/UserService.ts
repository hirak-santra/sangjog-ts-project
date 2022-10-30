import UserDbCall from "@db-operations/UserDbCall";
import { ApiService, Autowired } from "sangjog/annotations";

@ApiService()
export default class UserService {

    @Autowired
    userDbCall: UserDbCall;
 
}
