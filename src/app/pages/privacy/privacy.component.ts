import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-privacy',
  imports: [NgClass],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css',
})
export class PrivacyComponent {
  protected authService = inject(AuthService);

  protected email = 'vianneyaccart@gmail.com';
}
