import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // TODO: remove public
  public isLoggedIn = false;

  constructor() {}

  isAuthenticated() {
    return this.isLoggedIn;
  }

  getUser() {
    return {
      id: '1',
      email: 'vianneyaccart@gmail.com',
      name: 'Vianney Accart',
    };
  }
}
