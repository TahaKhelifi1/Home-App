import { Component, effect, inject } from '@angular/core';
import { RegisterFormComponent } from './ui/register-form.component';
import { RegisterService } from './data-access/register.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/data-access/auth.service';

@Component({
  standalone: true,
  selector: 'app-register',
  template: `
    <div class="container ">
      <app-register-form
        [status]="registerService.status()"
        (register)="registerService.createUser$.next($event)"/>
    </div>
  `,
  providers: [RegisterService],
  imports: [RegisterFormComponent],
  styles: [
    `
      a {
        margin: 2rem;
        color: var(--accent-darker-color);
      }
      .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 150px;
        padding-bottom: 200px;
        background-color: #fff3e0; 
        
      }
    `,
  ],
})
export default class RegisterComponent {
  public registerService = inject(RegisterService);
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    effect(() => {
      if (this.authService.user()) {
        this.router.navigate(['home']);
      }
    });
  }
}
