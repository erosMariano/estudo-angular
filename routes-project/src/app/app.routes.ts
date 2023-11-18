import { Routes } from '@angular/router';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'portifolio',
    component: PortifolioComponent,
    children: [
      {
        path: ':id',
        component: PortifolioComponent,
      }
    ]
  }
];
