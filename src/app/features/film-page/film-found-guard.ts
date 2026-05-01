import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { FilmsService } from '../films/films-service';

export const filmFoundGuard: CanActivateFn = (route) => {
  const filmService = inject(FilmsService);
  const filmId: string = route.params['filmId'];
  return filmService.getFilmById(Number(filmId)) !== undefined;
};
