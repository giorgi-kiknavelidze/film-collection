import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbsService } from './breadcrumbs-service';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {
  breadcrumbsService = inject(BreadcrumbsService);
}
