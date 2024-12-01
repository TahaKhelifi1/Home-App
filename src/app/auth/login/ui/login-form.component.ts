import { Component, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Credentials } from 'src/app/shared/interfaces/credentials';
import { LoginStatus } from '../data-access/login.service';

@Component({
  standalone: true,
  selector: 'app-login-form',
  template: `
    <form
      [formGroup]="loginForm"
      (ngSubmit)="login.emit(loginForm.getRawValue())">
      <mat-form-field appearance="fill">
        <mat-label>Email</mat-label>
        <input
          matNativeControl
          formControlName="email"
          type="email"
          placeholder="Enter your email"
        />
        <mat-icon matPrefix>mail</mat-icon>
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Password</mat-label>
        <input
          matNativeControl
          formControlName="password"
          type="password"
          placeholder="Enter your password"
        />
        <mat-icon matPrefix>lock</mat-icon>
      </mat-form-field>

      @if (loginStatus() === 'error') {
        <mat-error>Invalid email or password. Please try again.</mat-error>
      }
      @if (loginStatus() === 'authenticating') {
        <mat-spinner diameter="50"></mat-spinner>
      }

      <button
        mat-raised-button
        color="primary"
        type="submit"
        [disabled]="loginStatus() === 'authenticating'">
        Sign In
      </button>
    </form>
  `,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  styles: [
    `
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 400px;
        margin: auto;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #ccc;
      }

      button {
        width: 100%;
        margin-top: 1rem;
      }

      mat-error {
        margin: 5px 0;
        color: red;
      }

      mat-spinner {
        margin: 1rem 0;
      }
      .container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
    `,
  ],
})
export class LoginFormComponent {
  loginStatus = input.required<LoginStatus>();
  login = output<Credentials>();

  private fb = inject(FormBuilder);

  loginForm = this.fb.nonNullable.group({
    email: [''],
    password: [''],
  });
}
