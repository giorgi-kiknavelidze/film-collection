import { Component } from '@angular/core';
import { Breadcrumbs } from '../breadcrumbs/breadcrumbs';
import { RouterLink } from '@angular/router';
import { paths } from '../constants/paths';

@Component({
  selector: 'app-header',
  imports: [Breadcrumbs, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  paths = paths;
}
