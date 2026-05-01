import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  imports: [NgClass],
  templateUrl: './favorite-button.html',
  styleUrl: './favorite-button.css',
})
export class FavoriteButton {
  public isFavorite = input.required<boolean>();

  public toggleFavorite = output<void>();

  public onClick() {
    this.toggleFavorite.emit();
  }
}
