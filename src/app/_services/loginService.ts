import { Injectable } from "@angular/core";
import { User } from "../_models/User";

@Injectable()
export class LoginService {
    user!:User;
}