import { Component, inject, input } from '@angular/core';
import { Film } from '../films/film.type';
import { FavoriteButton } from '../favorite-button/favorite-button';
import { MinuteFormatterPipe } from '../utils/minute-formatter-pipe';
import { RouterLink } from '@angular/router';
import { paths } from '../constants/paths';
import { FilmsService } from '../films/films-service';

@Component({
  selector: 'app-film-card',
  imports: [FavoriteButton, MinuteFormatterPipe, RouterLink],
  templateUrl: './film-card.html',
  styleUrl: './film-card.css',
})
export class FilmCard {
  public film = input.required<Film>();

  public isMinimal = input(false);

  public filmsService = inject(FilmsService);

  public onToggleFavorite() {
    this.filmsService.toggleFavoriteStatus(this.film().id);
  }

  public getFilmRouteLink() {
    return `/${paths.film(this.film().id)}`;
  }
}
