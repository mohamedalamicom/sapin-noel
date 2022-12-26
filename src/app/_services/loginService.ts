import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Subject } from "rxjs"
import { User } from "../_models/User";

@Injectable()
export class LoginService {

    user!: User;
    user$:Subject<User> = new Subject<User>();

}