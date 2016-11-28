export class PostController {
  constructor($http, $stateParams) {
    this.http = $http;
    this.stateParams = $stateParams;
    this.post = {};
  }

  $onInit() {
    this.getResults();
  }

  getResults(){
    this.http.get('wp-json/wp/v2/posts/' + this.stateParams.ID)
      .then((post) => {
        this.post = post.data;
      }).catch(() => {
        throw new Error('Post data not found');
      });
  };

}

PostController.$inject = [
  '$http',
  '$stateParams'
];
