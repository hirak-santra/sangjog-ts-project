import UserController from "@controllers/UserController";
import OwnerController from "@controllers/OwnerController";
import UserService from "@services/UserService";
import UserDbCall from "@db-operations/UserDbCall";
import UserDTO from "@dtos/UserDTO";
import { AppModule } from "sangjog/annotations";

@AppModule({
    controllers: [UserController, OwnerController],
    services: [UserService],
    dbCalls: [UserDbCall],
    dtos: [UserDTO]
})
export default class ClientModule {}