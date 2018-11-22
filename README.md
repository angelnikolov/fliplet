# Server

Server is running Nest framework @ http://35.234.132.3/ running on Google Compute Engine

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

### FOR ALL OTHER CLIENT AND SERVER SPECIFIC DOCUMENTATION, GO TO THEIR FOLDERS
