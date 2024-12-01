import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; 
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent,RouterModule],
  template: `
  <app-header></app-header>
    <article id="detail" >
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
        crossorigin
      />
      <section class="listing-description">
          <h2 class="listing-heading1">{{housingLocation?.name}}</h2>
          <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="listing-heading"> About this Housing Location </h2>
        <ul>
          <li>Unites available : {{housingLocation?.availableUnits}} </li>
          <li>Wifi : {{housingLocation?.wifi ? 'Yes' : 'No'}} </li>
          <li>Laundry : {{housingLocation?.laundry ? 'Yes' : 'No'}} </li>
          <li>Parking : {{housingLocation?.parking ? 'Yes' : 'No'}} </li>
            <li>Pool : {{housingLocation?.pool ? 'Yes' : 'No'}} </li>
            <li>Pet Friendly : {{housingLocation?.petFriendly ? 'Yes' : 'No'}} </li>
          </ul>
      </section>
      <button type="submit" class="primary" routerLink="/location">Click here to apply</button>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation : HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    message: new FormControl('')
  })
  constructor() {
    const housingLocationId = Number(this.route.snapshot.paramMap.get('id'));
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation=> {
      this.housingLocation = housingLocation;
    });
  }
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName || '',
      this.applyForm.value.lastName || '',
      this.applyForm.value.email || '',
      this.applyForm.value.phone || '',
      this.applyForm.value.message || ''
    );
  }

}
