export class PostController {
  constructor($http, $stateParams) {
    let vm = this;
    this.post = $http.get('wp-json/wp/v2/posts/' + $stateParams.ID).then(res => vm.post = res.data);
  }
}

PostController.$inject = [
  '$http',
  '$stateParams'
];
