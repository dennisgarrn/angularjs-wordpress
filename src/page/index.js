import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './page.routes';
import { PageController } from './page.controller';
import { PageService } from '../services/page.service';

export default angular
    .module('app.page', [
        uirouter
    ])

    .service('$PageService', PageService)

    .config(routing)
    .controller('PageController', PageController)

    .name;
