import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ROUTES_PATH } from '../../app.routes';

export const NotAuthenticatedGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    router.navigateByUrl(ROUTES_PATH.ACCOUNT_DASHBOARD);
    return false;
  }
  return true;
};
