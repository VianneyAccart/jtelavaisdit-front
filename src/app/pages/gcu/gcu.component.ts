import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ROUTES_PATH } from '../../app.routes';

@Component({
  selector: 'app-gcu',
  imports: [NgClass, RouterLink],
  templateUrl: './gcu.component.html',
  styleUrl: './gcu.component.css',
})
export class GcuComponent {
  protected authService = inject(AuthService);
  protected email = 'vianneyaccart@gmail.com';
  protected PATH = ROUTES_PATH;
}
