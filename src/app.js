'use strict';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import sanitize from 'angular-sanitize';

import routing from './routing.config';
import compile from './compile.config';
import home from './home/home.module';
import nav from './components/nav/nav.module';
import post from './post/post.module';
import page from './page/page.module';

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
    .config(compile)
    .name;
