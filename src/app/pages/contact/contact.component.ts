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
import { ContactRequest } from './contact-request.model';
import { ContactService } from './contact.service';

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
  private contactService = inject(ContactService);

  @ViewChild('ngContactForm') ngContactForm!: NgForm;

  contactForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]],
  });

  submit() {
    if (!this.contactForm.valid) {
      this.toastrService.error(
        "Le formulaire de contact n'est pas valide",
        'Erreur'
      );
      return;
    }

    const contactRequest: ContactRequest = {
      email: this.contactForm.controls['email'].value?.trim() as string,
      message: this.contactForm.controls['message'].value?.trim() as string,
    };

    this.contactService.sendContactForm(contactRequest).subscribe({
      next: () => {
        this.ngContactForm.resetForm();
        this.contactForm.reset();
        this.toastrService.success(
          'Votre message a bien été envoyé. Nous reviendrons vers vous rapidement.',
          'Succès'
        );
      },
      error: () => {
        this.toastrService.error(
          "Une erreur est survenue lors de l'envoi du formulaire de contact. Veuillez réessayer plus tard.",
          'Erreur'
        );
      },
    });
  }
}
