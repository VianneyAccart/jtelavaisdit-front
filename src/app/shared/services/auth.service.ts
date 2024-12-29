import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authenticated = false;

  constructor() {}

  isAuthenticated() {
    return this.authenticated;
  }

  getUser() {
    return {
      id: '1',
      email: 'john.doe@email.com',
      name: 'John Doe',
    };
  }
}
