import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { Injectable } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, FormsModule],

  template: `
<app-header></app-header>
<div id="contact" class="section">
  <div class="block content-1070 center-relative section-content">
    <h2>Contact Us</h2>
    <p class="page-description">
      Feel free to reach out to me on any of the following contacts. <br />
      Thank you!
    </p>

    <div class="contact-page-wrapper">
      <!-- Left Side: Contact Information -->
      <div class="contact-page-left">
        <p class="medium-text">You can contact me through:</p>
        <div class="contact-info">
          <br><br><br><br>
          <span class="fa fa-mobile"></span>
          <p class="contact-info-content">Phone: +216 46 208 072</p>
        </div>
        <div class="contact-info">
          <span class="fa fa-envelope"></span>
          <p class="contact-info-content">E-mail: khelifitaha17&#64;gmail.com</p>
        </div>
        <div class="contact-info">
          <span class="fa fa-globe"></span>
          <p class="contact-info-content">Website: www.homelocation.com</p>
        </div>
        <div class="contact-info">
          <span class="fa fa-map-marker"></span>
          <p class="contact-info-content">Address: Tunisia, Tozeur, Rue AlHajij</p>
        </div>
      </div>

      <!-- Right Side: Contact Form -->
      <div class="contact-page-right">
        <div class="contact-form">
          <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <div>
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                [(ngModel)]="formData.name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                [(ngModel)]="formData.email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label for="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                [(ngModel)]="formData.subject"
                placeholder="Enter the subject"
              />
            </div>

            <div>
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                [(ngModel)]="formData.message"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            <div >
              <button type="submit" [disabled]="!contactForm.form.valid">
                <span class="fa fa-paper-plane"></span> Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</div>



  `,
  styleUrl: './contact.component.css'
})
@Injectable({
  providedIn: 'root',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit() {
    const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
    const ACCESS_KEY = 'd9dbc091-75d3-4912-a229-6b458c7a9697'; // Replace with your Web3Forms access key.

    const payload = {
      access_key: ACCESS_KEY,
      ...this.formData,
    };

    axios
      .post(WEB3FORMS_URL, payload)
      .then((response) => {
        alert('Your message has been sent!');
        this.formData = { name: '', email: '', subject: '', message: '' }; // Reset form
      })
      .catch((error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      });
  }
}
