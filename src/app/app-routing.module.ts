import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { LoginGuard } from './_guards/LoginGuard';

const routes: Routes = [
  { // Route Config
    path:'',
    component: ShoppingComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
  Un Guard c'est un service avec une méthode spéciale appelé canActivate
  Qui va se déclancher AVANT la génération du composant relié à une Route

  Si la méthode canActivate retourne :

  VRAI : L'utilisateur est autorisé à récupérer le composant demandé via la route désignée.
  FAUX : L'utilisateur N'EST PAS autorisé à récupérer le composant demandé via la route désignée.

*/