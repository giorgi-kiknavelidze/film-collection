import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { AboutPage } from './features/about-page/about-page';
import { FilmPage } from './features/film-page/film-page';
import { filmFoundGuard } from './features/film-page/film-found-guard';
import { paths } from './features/constants/paths';

export const routes: Routes = [
  {
    path: paths.home,
    component: HomePage,
    title: 'Home | FilmCollection',
  },
  {
    path: paths.about,
    component: AboutPage,
    title: 'About | FilmCollection',
  },
  {
    path: paths.film(':filmId'),
    component: FilmPage,
    canActivate: [filmFoundGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
