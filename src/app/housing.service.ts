import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url='http://localhost:3000/locations';

  async getAllhousingLocations() : Promise<HousingLocation []> {
    const data = await fetch(this.url);
    return data.json()??[];
  }
  async getHousingLocationById(id: Number) :Promise< HousingLocation | undefined>{
    const data = await fetch(`${this.url}/${id}`); 
    return data.json()??{};
  }
  submitApplication(firstName: string, lastName: string, email: string, phone: string, message: string) {
    console.log(firstName, lastName, email, phone, message);
  }
  constructor() { }
}
