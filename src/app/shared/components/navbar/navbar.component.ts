import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavlinkComponent } from '../navlink/navlink.component';
import { Router, RouterLink } from '@angular/router';
import { ROUTES_PATH } from '../../../app.routes';
import { NgClass } from '@angular/common';
import { NavlinksComponent } from '../navlinks/navlinks.component';
import packageJson from '../../../../../package.json';

@Component({
  selector: 'app-navbar',
  imports: [NavlinkComponent, RouterLink, NgClass, NavlinksComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  protected authService = inject(AuthService);
  #routerService = inject(Router);

  protected isScrolled = false;
  protected isUserMenuOpen = false;
  protected isMobileMenuOpen = false;
  protected isMobileAuthMenuOpen = false;
  protected PATH = ROUTES_PATH;
  protected version = packageJson.version;

  protected toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;

    if (this.isUserMenuOpen) {
      document.body.classList.add('overflow-hidden');
    }

    this.isMobileMenuOpen = false;
    this.isMobileAuthMenuOpen = false;
  }

  protected toggleLoggedMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    if (this.isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    }
    this.isUserMenuOpen = false;
    this.isMobileAuthMenuOpen = false;
  }

  protected toggleNotLoggedMobileMenu() {
    this.isMobileAuthMenuOpen = !this.isMobileAuthMenuOpen;

    if (this.isMobileAuthMenuOpen) {
      document.body.classList.add('overflow-hidden');
    }

    this.isUserMenuOpen = false;
    this.isMobileMenuOpen = false;
  }

  protected closeAllMenus() {
    document.body.classList.remove('overflow-hidden');
    this.isMobileMenuOpen = false;
    this.isUserMenuOpen = false;
    this.isMobileAuthMenuOpen = false;
  }

  onLinkClick(event: string) {
    if (event === 'logout') {
      this.logout();
    } else {
      this.#routerService.navigate([event]);
      this.closeAllMenus();
    }
  }

  protected loginAndClose() {
    //this.authService.login();
    this.closeAllMenus();
  }

  protected registerAndClose() {
    //this.authService.register();
    this.closeAllMenus();
  }

  protected logout() {
    this.authService.authenticated = false;
    this.#routerService.navigate([this.PATH.HOME]);
    this.closeAllMenus();
  }
}
