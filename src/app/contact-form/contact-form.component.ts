import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contactForm!: FormGroup;
  language: string = 'en';

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  @ViewChild('success') success!: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    public dataService: DataService
  ) {}

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    let success = this.success.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    sendButton.style.display = 'none';
    success!.style.display = 'unset';

    await fetch('https://herbst-kevin.de/send_mail.php', {
      method: 'POST',
      body: new URLSearchParams(this.contactForm.value).toString(),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    //texte anzeigen nachricht gesendet
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
    this.contactForm.reset();
    setTimeout(() => {
      success!.style.display = 'none';
      sendButton.style.display = 'unset';
    }, 2300);
  }

  ngOnInit(): void {
    this.dataService.currentLanguage.subscribe((language) => {
      this.language = language;
    });

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/),
        ],
      ],
      message: ['', Validators.required],
    });
  }

  get name() {
    return this.contactForm.get('name') as FormControl;
  }

  get email() {
    return this.contactForm.get('email') as FormControl;
  }

  get message() {
    return this.contactForm.get('message') as FormControl;
  }
}
