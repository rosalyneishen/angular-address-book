# AngularAddressBook

## Install dependencies

Run `npm install` to get the necessary dependencies

## Run the app
Run an ng serve --open to see the address book in your browser

## My Approach
Was to just create a basic angular app with two basic components for the address list and contact details card. I wanted to focus on the design and animations as well since this is a fun little project where I get to dictate the look and feel. I also wanted to make sure there were some more complex angular technical goodies involved.

## Features include:
- RxJS Observables for subscribing to asynchronous values
- Angular component Inputs() and Outputs() for cross-component data transfer
- HTTP Client for hitting the Random User API
- Material library components for a sleek and simple look
- Component lifecycle management for component performance
- Shared angular animations class for reusability in the app
- Class/Interface model mapping for using Typescripts strongly typed capabilites
- CSS media queries for responsiveness
- BEM-SASS naming convention for HTML tags
- Super cool look and feel for those who like to look at pretty things
 
## Potential Improvements
- Add Angular routing and deep linking for navigating to a specific contact page
- Break up components further for a lighter footprint and detaching components that could be shared
- Use pagination to make async calls to api
- Define a shared stylesheet with rules that can be used across the app
- New features such as addContact, deleteContact, favoriteContact, emailContact would make this more robust

_________________________________________________

## Angular version

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
