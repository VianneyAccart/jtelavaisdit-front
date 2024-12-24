import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { ROUTES_PATH } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  #authService = inject(AuthService);
  #routerService = inject(Router);

  protected PATH = ROUTES_PATH;

  fakeLogin() {
    this.#authService.isLoggedIn = true;
    this.#routerService.navigate([this.PATH.ACCOUNT_DASHBOARD]);
  }
}
