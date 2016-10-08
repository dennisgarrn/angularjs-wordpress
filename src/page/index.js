import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './page.routes';
import PageController from './page.controller';

export default angular
    .module('app.page', [
        uirouter
    ])

    .config(routing)
    .controller('PageController', PageController)
    .name;
