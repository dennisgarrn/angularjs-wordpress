import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import PostService from './home.service';

export default angular
    .module('app.home', [
        uirouter
    ])

    .config(routing)
    .service('PostService', PostService)
    .controller('HomeController', HomeController)

    .name;
