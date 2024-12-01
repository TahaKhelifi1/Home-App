import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './shared/guards/auth.guard';
import HomeComponent from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LocationComponent } from './location/location.component';
import { AboutUsComponent } from './about-us/about-us.component'
import { ContactComponent } from './contact/contact.component';
import { NewhomeComponent } from './newhome/newhome.component';


export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'home',
    canActivate: [isAuthenticatedGuard()],
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path : 'details/:id',
    component : DetailsComponent,
    title : 'Details Page'
  },
  {
    path :'location',
    component :LocationComponent,
    title : 'Apply Form'
  },
  {
    path: 'about',
    component: AboutUsComponent,
    title: 'About us'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact us'
  },
  {
    path: 'addhome',
    component: NewhomeComponent,
    title: 'Add Home'
  }
  
];
