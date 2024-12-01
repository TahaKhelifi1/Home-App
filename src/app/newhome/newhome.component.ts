import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import axios from 'axios';


@Component({
  selector: 'app-newhome',
  standalone: true,
  imports: [HeaderComponent,RouterModule,MatToolbarModule,FormsModule],
  template: `
  <app-header></app-header>
<div class="flex items-center min-h-screen bg-gray-100 dark:bg-gray-900">
  <div class="container mx-auto">
    <div class="max-w-xl mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
      <div class="text-center">
        <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
          Add your home here
        </h1>
        <p class="text-gray-400 dark:text-gray-400">
          Please upload your photo and we will get back to you.
        </p>
      </div>
      <div class="m-7">
        <form action="https://api.web3forms.com/submit" method="POST" enctype="multipart/form-data" (ngSubmit)="onSubmit()" #contactForm="ngForm">
          <input type="hidden" name="access_key" value="d9dbc091-75d3-4912-a229-6b458c7a9697" />
          <input type="hidden" name="subject" value="New Submission from Web3Forms" />
          <input type="checkbox" name="botcheck" id="" style="display: none;" />
          <input type="hidden" name="redirect" value="https://web3forms.com/success">

          <div class="flex mb-6 space-x-4">
            <div class="w-full md:w-1/2">
              <label for="fname" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Home Name</label>
              <input type="text" name="name" id="first_name" [(ngModel)]="formData.fname" placeholder="Enter the house name" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
            </div>
            <div class="w-full md:w-1/2">
              <label for="lname" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">City & State</label>
              <input type="text" name="last_name" id="lname" [(ngModel)]="formData.lname" placeholder="Doe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
            </div>
          </div>
          <div class="flex mb-6 space-x-4">
            <div class="w-full md:w-1/2">
              <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
              <input type="email" name="email" id="email" placeholder="you@company.com" [(ngModel)]="formData.email" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
            </div>

            <div class="w-full md:w-1/2">
              <label for="wifi" class="block text-sm mb-2 text-gray-600 dark:text-gray-400">WiFi Available?</label>
          <div class="flex items-center space-x-4">
                <label class="flex items-center text-gray-600 dark:text-gray-400">
                  <input type="radio" name="wifi" value="yes" required class="mr-2 focus:ring-indigo-500" [(ngModel)]="formData.wifi">Yes
                </label>
                <label class="flex items-center text-gray-600 dark:text-gray-400">
                  <input type="radio" name="wifi" value="no" required class="mr-2 focus:ring-indigo-500"  [(ngModel)]="formData.wifi">No
                </label>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label for="laundry" class="block text-sm mb-2 text-gray-600 dark:text-gray-400">Laundry Available?</label>
          <div class="flex items-center space-x-4">
                <label class="flex items-center text-gray-600 dark:text-gray-400">
                  <input type="radio" name="wifi" value="yes" required class="mr-2 focus:ring-indigo-500"  [(ngModel)]="formData.laundry">Yes
                </label>
                <label class="flex items-center text-gray-600 dark:text-gray-400">
                  <input type="radio" name="wifi" value="no" required class="mr-2 focus:ring-indigo-500"  [(ngModel)]="formData.laundry">No
                </label>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label for="parking" class="block text-sm mb-2 text-gray-600 dark:text-gray-400">Parking Available?</label>
          <div class="flex items-center space-x-4">
                <label class="flex items-center text-gray-600 dark:text-gray-400">
                  <input type="radio" name="wifi" value="yes" required class="mr-2 focus:ring-indigo-500"  [(ngModel)]="formData.parking" >Yes
                </label>
                <label class="flex items-center text-gray-600 dark:text-gray-400">
                  <input type="radio" name="wifi" value="no" required class="mr-2 focus:ring-indigo-500"  [(ngModel)]="formData.parking">No
                </label>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label for="pool" class="block text-sm mb-2 text-gray-600 dark:text-gray-400">POOL Available?</label>
          <div class="flex items-center space-x-4">
                <label class="flex items-center text-gray-600 dark:text-gray-400">
                  <input type="radio" name="wifi" value="yes" required class="mr-2 focus:ring-indigo-500" [(ngModel)]="formData.pool">Yes
                </label>
                <label class="flex items-center text-gray-600 dark:text-gray-400">
                  <input type="radio" name="wifi" value="no" required class="mr-2 focus:ring-indigo-500" [(ngModel)]="formData.pool">No
                </label>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label for="pet" class="block text-sm mb-2 text-gray-600 dark:text-gray-400">Pet friendly Available?</label>
          <div class="flex items-center space-x-4">
                <label class="flex items-center text-gray-600 dark:text-gray-400">
                  <input type="radio" name="wifi" value="yes" required class="mr-2 focus:ring-indigo-500" [(ngModel)]="formData.pet">Yes
                </label>
                <label class="flex items-center text-gray-600 dark:text-gray-400">
                  <input type="radio" name="wifi" value="no" required class="mr-2 focus:ring-indigo-500" [(ngModel)]="formData.pet">No
                </label>
              </div>
            </div>
          </div>

          <div class="mb-6">
            <label for="message" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Upload Home Photo (.jpg or .png)</label>
            <input type="file" id="attachment" name="attachment" accept="image/jpeg,image/png" required />
          </div>
          <div class="mb-6">
            <button type="submit" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none" [disabled]="!contactForm.form.valid">
              Add Home
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  `,
  styleUrl: './newhome.component.css'
})
@Injectable({
  providedIn: 'root',
})
export class NewhomeComponent {
  formData = {
    fname: '',
    lname: '',
    email: '',
    message: '',
    wifi: '',
    laundry: '',
    parking: '',
    pool: '',
    pet: ''
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
        this.formData = { fname: '', email: '', lname: '', message: '', wifi: '', laundry: '', parking: '', pool: '', pet: '' }; // Reset form
      })
      .catch((error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      });
  }

}
