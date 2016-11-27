import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './post.routes';
import { PostController } from './post.controller';
import { PostService } from '../services/post.service';

export default angular
    .module('app.post', [
        uirouter
    ])

    .service('$PostService', PostService)

    .config(routing)
    .controller('PostController', PostController)

    .name;
