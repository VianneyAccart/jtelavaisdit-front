import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { SidenavComponent } from "./shared/components/sidenav/sidenav.component";
import { NgClass } from '@angular/common';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, NavbarComponent, SidenavComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected authService = inject(AuthService);
}
