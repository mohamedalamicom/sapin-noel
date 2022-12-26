import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../_services/loginService";

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router, private loginService: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if(localStorage.getItem('user') === null) { // KO
            this.router.navigateByUrl('/login'); // REDIRCT 
            return false; // EMPECHER LE COMPOSANT DE SE GENERER
        }

        // SINON
        return true; // ON GENERE LE COMPOSANT
    }

}