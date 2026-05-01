# FilmCollection

A modern Angular application for browsing and managing a personal film collection. Built with Angular 21, signals, and standalone components.

## Features
- **Browse Films**: View a curated list of films with posters, ratings, and genres
- **Search**: Filter films by title in real-time
- **Favorites**: Mark and unmark films as favorites
- **Film Details**: View comprehensive film information including description, duration, genre, and year
- **Responsive Navigation**: Client-side routing with dynamic breadcrumbs
- **Custom UI Elements**: Auto-focus search field and formatted duration display (e.g., "2h 30min")

## Technologies Used
- **Angular 21** - Framework with standalone components and signals
- **TypeScript** - Strict mode enabled
- **ESLint** - Code linting with Angular ESLint integration

## Prerequisites
NodeJs
Angular CLI

## Installing dependencies

To install dependencies run:

```bash
npm install
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Project Structure
```
src/app/features/
├── film-card/          # Reusable film card component
├── film-page/          # Film details page
├── films/              # Film data, types, and service
├── home-page/          # Main film listing with search
├── header/             # App header with navigation
├── footer/             # App footer
├── breadcrumbs/        # Dynamic breadcrumb navigation
├── favorite-button/    # Favorite toggle button
└── utils/              # Custom directives and pipes
    ├── custom-auto-focus.ts
    └── minute-formatter-pipe.ts
```

## Architecture Highlights

- Signals: Film data stored in signal() with computed filtering via computed()
- Standalone Components: All components, directives, and pipes are standalone
- Global Service: Services registered with providedIn: 'root'
- Component Input Binding: Route parameters bound directly to component inputs via withComponentInputBinding()
