routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('post', {
      url: '/blog/:ID',
      template: require('./post.html'),
      controller: 'PostController',
      controllerAs: 'post'
    });
}
