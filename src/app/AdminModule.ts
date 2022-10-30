import AdminController from "@controllers/AdminController";
import AdminService from "@services/AdminService";
import AdminAuthService from "@services/AdminAuthService";
import AdminDbCall from "@db-operations/AdminDbCall";
import { AppModule } from "sangjog/annotations";


@AppModule({
    controllers: [AdminController],
    services: [AdminService],
    dbCalls: [AdminDbCall],
    auth: AdminAuthService
})
export default class AdminModule {}
