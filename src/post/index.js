import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './post.routes';
import PostController from './post.controller';

export default angular
    .module('app.post', [
        uirouter
    ])

    .config(routing)
    .controller('PostController', PostController)

    .name;
