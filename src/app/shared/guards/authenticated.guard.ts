import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ROUTES_PATH } from '../../app.routes';

export const AuthenticatedGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    router.navigateByUrl(ROUTES_PATH.LOGIN);
    return false;
  }
  return true;
};
