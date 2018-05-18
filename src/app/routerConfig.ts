import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const appRoutes: Routes = [
  { path: 'app-home', 
    component: HomeComponent 
  },
  {
    path: 'app-aboutus',
    component: AboutusComponent
  }
];
export default appRoutes;