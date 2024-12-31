import { NgClass } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import {
  FormBuilder,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [NgClass, ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  protected authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private toastrService = inject(ToastrService);

  @ViewChild('ngContactForm') ngContactForm!: NgForm;

  contactForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]],
  });

  submit() {
    console.log(this.contactForm.value);
    console.log(environment.apiUrl);
    this.toastrService.success(
      'Votre message a bien été envoyé. Nous reviendrons vers vous rapidement.',
      'Succès'
    );
    this.contactForm.reset();
    this.ngContactForm.resetForm();
  }
}
