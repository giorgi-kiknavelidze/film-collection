import { Injectable, signal } from '@angular/core';
import { BreadcrumbsPath } from './breadcrumbs-path-type';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  public breadcrumbsContent = signal<BreadcrumbsPath[]>([]);
}
