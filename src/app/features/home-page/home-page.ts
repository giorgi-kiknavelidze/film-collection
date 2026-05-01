import { Component, computed, inject, signal } from '@angular/core';
import { FilmsService } from '../films/films-service';
import { FilmCard } from '../film-card/film-card';
import { CustomAutoFocus } from '../utils/custom-auto-focus';
import { BreadcrumbsService } from '../breadcrumbs/breadcrumbs-service';

@Component({
  selector: 'app-home-page',
  imports: [FilmCard, CustomAutoFocus],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  public filmsService = inject(FilmsService);

  public searchText = signal('');

  public filmsToDisplay = computed(() => this.filmsService.search(this.searchText()));

  public breadcrumbsService = inject(BreadcrumbsService);

  constructor() {
    this.breadcrumbsService.breadcrumbsContent.set([{ name: 'Home' }]);
  }

  public onSearchBoxInput(value: string) {
    this.searchText.set(value);
  }
}
