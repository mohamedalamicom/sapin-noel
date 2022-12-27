import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../_models/User';
import { LoginService } from '../_services/loginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  user!: User;
  error: string = '';

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [
        Validators.required
       ]],
      password: ['', [
        Validators.required,
      ]]
    })
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  auth() {
    if (!this.loginForm.valid) {
      this.error = "Empty credentials"; // Aucun champ n'est remplis
      return;
    }

    // Action A
    /*
    Méthodes HTTP par rapport au CRUD
      GET         // READ
      POST        // CREATE
      PUT/PATCH   // UPDATE
      DELETE      // DELETE
    */
    /* // Action A
        this.httpClient.post<User>('https://dummyjson.com/auth/login', this.loginForm.value)
        // Action B
      .subscribe(
        // CallBacks
        () => { }, // Succès // Dans le cadre de HTTP 2XX (200 OK // 201 CREATED)
        () => { }, // Echèc // Dans le cadre de HTTP 4XX & 5XX (404 Not Found // 502 Bad Gateway)
        () => { }, // Dans tout les cas
      ) 
    */
    // Action C
    // ABC // ACB // AC


    /*
        this.loginForm.value = {
          username: this.username.value,
          password: this.password.value
        }
    */
    this.httpClient
        .post<User>('https://dummyjson.com/auth/login', this.loginForm.value) // .post(url, body, header?)
        .subscribe(user => {
          this.user = user;

          // Memoire

          // Mémoire vive durant l'usage du site (Via le navigateur)
          // Peu couteuse. Persistance zéro : du moment ou on quitte le navigateur, ca se remet à zéro
          // Exemple : Proprietes d'un service

          // Cache // Cookie
          // Plus couteux que la mêmoire vive, moins couteux que la mémoire du serveur
          // Mais ils sont + persistant : 
          // Durée de vie dépend de l'existance du fichier dans l'ordinateur de notre utilisateur
          // Petite note : Respecter la RGPD. 
          // (Tout projet à distination de la France ET/OU hébergé en France)
          // => Vous devez avoir l'autorisation explicite de l'utilisateur avec le droit de refuser
          // => Vous devez être en mesure d'expliquer avec transparence ce que vous faites avec les données récolté
          // => l'utilisateur a le droit de consulter ce que vous avez récupéré, et demander de les supprimer, sinon la CNIL peut vous tomber dessus
          // Exemple : Local Storage
          
          // Données à distance : Serveur && Base de donnée
          // +Distance +Coût (Storage / Bande passante) +Persistant


          localStorage.setItem('user', JSON.stringify(user));
          window.location.reload(); // Réactualiser la page avec du JavaScript (donc pas d'Angular) (donc on sort du SPA)
          //  JSON.stringify(Object) => string
          //  JSON.parse(string) => Object
        }, (err) => {
          this.error = err.error.message;
        })
  }

}
