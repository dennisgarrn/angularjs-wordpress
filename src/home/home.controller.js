export class HomeController {
  constructor(PostService) {
    PostService.getPosts()
    .then(result => this.posts = result.data);
  }
}

HomeController.$inject = [
  '$PostService'
];
