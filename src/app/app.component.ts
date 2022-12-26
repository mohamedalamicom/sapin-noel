import { Component } from '@angular/core';
import { User } from './_models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sapin-noel';
  isConnected: boolean = false;
  // TODO: Déterminer si l'utilisateur est connecté. Si oui isConnected = true; Sinon isConnected = false;

  user!: User;

  constructor() {
    this.isConnected = (localStorage.getItem('user') !== null);
  }


}
