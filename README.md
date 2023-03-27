
##  02 Angular Directives 

This is part of the Udemy Angular Core Deep Dive course that talk about Angular Components, Core Directives and Pipes.

This repository is created with NodeJS 18 and Angular 15.


# Installation pre-requisites

IMPORTANT: Please use Node 18 (Long Term Support version). Note that Node 18 is not yet officially supported by the Angular CLI.

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/alan88w/02-angular-directives.git

Before running, you must install the required packages.

    cd 02-angular-directives
    npm install

Its also possible to install the modules as usual using npm:

    npm install

NPM 5 or above has the big advantage that if you use it you will be installing the exact same dependencies than I installed in my machine, so you wont run into issues caused by semantic versioning updates.

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

# To Run the Development Backend Server

In order to be able to provide realistic examples, we will need in our playground a small REST API backend server. We can start the sample application backend with the following command:

    npm run server

This is a small Node REST API server.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)


