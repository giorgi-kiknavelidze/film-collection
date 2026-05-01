import { computed, Injectable, signal } from '@angular/core';
import filmData from './films.json';
import { Film } from './film.type';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  public films = signal<Film[]>(filmData);

  public favoriteFilms = computed(() => this.films().filter((item) => item.isFavorite));

  public getFilmById(id: number): Film | undefined {
    return this.films().find((item) => item.id === id);
  }

  public toggleFavoriteStatus(id: number): void {
    this.films.update((items) =>
      items.map((item) => (item.id === id ? { ...item, isFavorite: !item.isFavorite } : item)),
    );
  }

  public search(by: string): Film[] {
    return this.films().filter((item) => item.title.includes(by));
  }
}
