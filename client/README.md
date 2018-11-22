# Server

Server is running Nest framework @ http://35.234.132.3/
The server is deployed on Google Compute engine

The client is being served statically by the server via a middleware

## To run the server in development use:

`npm run start:dev`

## To build the server in production use:

`./node_modules/.bin/tsc`

## You will also need to build the client in production from

`./client` by

`npm run build -- --prod`

Then you can run `sudo pm2 start pm2config.json` and the server should run automatically

# Hybrid App

## To build the applications use the following scripts:

`npm run cordova:build:ios`

`npm run cordova:build:android`

## To run them, use:

`npm run cordova:run:android`

`npm run cordova:run:ios`

# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
