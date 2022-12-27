import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, retry } from "rxjs";

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(localStorage.getItem('user') === null) { // S'il y a pas d'utilisateur dans le local storage
            this.router.navigateByUrl('/login'); // Redirection vers la page Login
            return false; // Empecher la génération de la page principale
        }
        
        // Sinon autoriser la génération de la page principale
        return true;
    }

}