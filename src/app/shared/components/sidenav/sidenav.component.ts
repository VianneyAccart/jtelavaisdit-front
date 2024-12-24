import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ROUTES_PATH } from '../../../app.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import {
  faMessage, faFolder
} from '@fortawesome/free-regular-svg-icons';
import { NavlinksComponent } from "../navlinks/navlinks.component";

@Component({
  selector: 'app-sidenav',
  imports: [FontAwesomeModule, NavlinksComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  protected authService = inject(AuthService);

  protected PATH = ROUTES_PATH;

  protected faChartLine = faChartLine
  protected faMessage = faMessage
  protected faFolder = faFolder

  onLinkClick(event: string) {
    console.log(event)
  }

}
