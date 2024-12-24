import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  faBars,
  faChartLine, faArrowRightToBracket, faArrowRightFromBracket, faShieldHalved
} from '@fortawesome/free-solid-svg-icons';
import {
  faUser,
  faCircleXmark,
  faMessage, faFolder
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavlinkComponent } from "./components/navlink/navlink.component";
import { RouterLink } from '@angular/router';
import { ROUTES_PATH } from '../../../app.routes';

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule, NavlinkComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  protected authService = inject(AuthService);
  protected isScrolled = false;
  protected isUserMenuOpen = false;
  protected isMobileMenuOpen = false;
  protected isMobileAuthMenuOpen = false; 

  protected PATH = ROUTES_PATH;

  protected faBars = faBars;
  protected faUser = faUser;
  protected faCircleXmark = faCircleXmark;
  protected faChartLine = faChartLine
  protected faMessage = faMessage
  protected faFolder = faFolder
  protected faArrowRightToBracket = faArrowRightToBracket
  protected faArrowRightFromBracket = faArrowRightFromBracket
  protected faShieldHalved = faShieldHalved

  protected toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
    this.isMobileMenuOpen = false;
    this.isMobileAuthMenuOpen = false;
  }

  protected toggleLoggedMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.isUserMenuOpen = false;
    this.isMobileAuthMenuOpen = false;
  }

  protected toggleNotLoggedMobileMenu() {
    this.isMobileAuthMenuOpen = !this.isMobileAuthMenuOpen;
    this.isUserMenuOpen = false;
    this.isMobileMenuOpen = false;
  }

  protected closeAllMenus() {
    this.isMobileMenuOpen = false;
    this.isUserMenuOpen = false;
    this.isMobileAuthMenuOpen = false;
  }

  onLinkClick(event: string) {
    if (event === 'logout') {
      this.logout();
    } else {
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
    //this.authService.logout();
    this.closeAllMenus();
  }
}
