import angular from 'angular';
import uirouter from 'angular-ui-router';

import { NavController } from './nav.controller';

export default angular
    .module('app.nav', [
        uirouter
    ])

    .component('navigation', {
        template: require('./nav.template.html'),
        controller: NavController
    })

    .name;
