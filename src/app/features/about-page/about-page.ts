import { Component, inject } from '@angular/core';
import { BreadcrumbsService } from '../breadcrumbs/breadcrumbs-service';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  public breadcrumbsService = inject(BreadcrumbsService);

  constructor() {
    this.breadcrumbsService.breadcrumbsContent.set([{ name: 'About' }]);
  }
}
