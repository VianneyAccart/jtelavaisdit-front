import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ROUTES_PATH } from '../../../app.routes';
import { NavlinksComponent } from "../navlinks/navlinks.component";

@Component({
  selector: 'app-sidenav',
  imports: [NavlinksComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  protected authService = inject(AuthService);

  protected PATH = ROUTES_PATH;

  onLinkClick(event: string) {
    console.log(event)
  }

}
