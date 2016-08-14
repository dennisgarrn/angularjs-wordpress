import angular from 'angular';
import uirouter from 'angular-ui-router';

import NavController from './nav.controller';
import PageService from '../services/pages.service';

export default angular.module('app.nav', [uirouter])
  .controller('NavController', NavController)
  .service('PageService', PageService)
  .name;
