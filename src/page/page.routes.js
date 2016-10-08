routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('page', {
      url: '/page/:ID',
      template: require('./page.html'),
      controller: 'PageController',
      controllerAs: 'page'
    });
}
