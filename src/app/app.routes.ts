import { Routes } from '@angular/router';
import { HomePageComponent} from './pages/home-page/home-page.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomePageComponent},
  {path: 'about', loadComponent: () => import('./pages/about-view/about-view.component').then(m => m.AboutViewComponent)},
  {path: 'repositories', loadComponent: () => import('./pages/repositories-view/repositories-view.component').then(m => m.RepositoriesViewComponent)},
];
