import { Component, effect, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../shared/data-access/auth.service';
import { Router, RouterModule } from '@angular/router';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
import { HeaderComponent } from "../header/header.component";

@Component({
  template: `
  <app-header></app-header>
  <section class="search">
        <form >
            <input type="text" id="search" name="search" placeholder="Search for homes" #filter>
            <button type="button" class="primary" (click)="filterResult(filter.value)">Search</button>
        </form>
    </section>
    <section class="results"  id="home">
    <app-housing-location *ngFor="let housingLocation of filtredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
`,
  styleUrls: ['./home.component.css'],
  standalone: true,
  selector: 'app-home',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HousingLocationComponent,
    CommonModule,
    RouterModule,
    HeaderComponent
],
  
})
export default class HomeComponent {
  housingLocationList: HousingLocation [] = [];
  housingService: HousingService = inject(HousingService);
  filtredLocationList: HousingLocation [] = [];
  authService = inject(AuthService);
  private router = inject(Router);
  constructor() {
     this.housingService.getAllhousingLocations().then((housingLocationList:HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filtredLocationList = housingLocationList;
      });
      effect(() => {
        if (!this.authService.user()) {
          this.router.navigate(['auth', 'login']);
        }
      });
  }

  filterResult(text: string) {
    if (!text) {
      this.filtredLocationList = this.housingLocationList;
      return;
    }
    this.filtredLocationList = this.housingLocationList.filter((housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())) )
  }
}
