'use strict';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import sanitize from 'angular-sanitize';

import routing from './app.config';
import home from './home';
import nav from './nav';
import post from './post';
import page from './page';

export default angular
    .module('app', [
        uirouter,
        sanitize,
        home,
        nav,
        post,
        page
    ])
    .config(routing)
    .name;
