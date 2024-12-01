import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [HeaderComponent],
  template: `
<app-header></app-header>
<div id="about" class="section">   
                    <div class="block  center-relative ">  
                        <h2 class="entry-title">About our fonwder</h2>
                        <p class="page-description">Taha Khelifi, a software developer specializing in web development</p>

                        <div class="one_half  ">
                            <p class="big-text ">My aim is to create functional, user-friendly applications with a strong focus on user experience.</p>
                            <p>&nbsp;</p>
                            <p>My journey started with curiosity about website development. Since then, I ve contributed to open-source projects and developed my own applications using frameworks like Angular.</p>
                            <p>I thrive in collaborative environments and believe in continuous learning. In my free time, I attend tech meetups, share knowledge on my blog, and explore photography.</p>
                            <p>&nbsp;</p>
                            <p>My goal is to work with a team that values creativity and innovation to create applications that make a difference in people's lives.</p>
                        </div>
                </div> 
  `,
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
