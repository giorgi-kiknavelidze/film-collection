import { Component, computed, effect, input, inject } from '@angular/core';
import { BreadcrumbsService } from '../breadcrumbs/breadcrumbs-service';
import { Title } from '@angular/platform-browser';
import { FilmsService } from '../films/films-service';
import { paths } from '../constants/paths';
import { FilmCard } from '../film-card/film-card';
import { MinuteFormatterPipe } from '../utils/minute-formatter-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-film-page',
  imports: [FilmCard, MinuteFormatterPipe, RouterLink],
  templateUrl: './film-page.html',
  styleUrl: './film-page.css',
})
export class FilmPage {
  public filmId = input.required<string>();

  public breadcrumbsService = inject(BreadcrumbsService);

  public titleService = inject(Title);

  public filmsService = inject(FilmsService);

  public paths = paths;

  public film = computed(() => {
    const filmById = this.filmsService.getFilmById(Number(this.filmId()));
    if (!filmById) throw new Error('Film Not Found'); // this should never happen, the route guard should prevent it from happening
    return filmById;
  });

  constructor() {
    effect(() => {
      const filmTitle = this.film().title;
      this.titleService.setTitle(`${filmTitle} | FilmCollection`);
      this.breadcrumbsService.breadcrumbsContent.set([
        { name: 'Home', href: `/${paths.home}` },
        { name: filmTitle },
      ]);
    });
  }
}
