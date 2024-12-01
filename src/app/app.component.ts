import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  template: ` <main>
  <header class="content"></header>
  <router-outlet></router-outlet>
</main> `,
styleUrls: ['./app.component.css'],
})
export class AppComponent {}
