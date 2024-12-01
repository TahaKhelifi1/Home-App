import { Component,inject } from '@angular/core';
import { AuthService } from '../shared/data-access/auth.service';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule,RouterModule,CommonModule],
  template: `
<div class="container">
  <mat-toolbar >
  <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    <span class="spacer"></span>
    <nav class="navbar">
    <ul class="nav-links">
      <li><a routerLink="/home">Home</a></li>
      <li><a routerLink="/location">Location</a></li>
      <li><a routerLink="/addhome">Add Home</a></li>
      <li><a routerLink="/about">About Us</a></li>
      <li><a routerLink="/contact">Contact</a></li>
    </ul>

    </nav>
    <span class="spacer"></span>
    <button mat-icon-button (click)="authService.logout()">
      <mat-icon>logout</mat-icon>
    </button>
  </mat-toolbar>
</div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  authService = inject(AuthService);

}
