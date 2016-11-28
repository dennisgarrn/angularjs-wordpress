export class HomeController {
  constructor($PostService) {
    this.PostService = $PostService;
    this.posts = [];
  }

  $onInit() {
    this.getResults();
  }

  getResults() {
    this.PostService.getPosts()
      .then((posts) => {
        this.posts = posts.data;
      })
      .catch(() => {
        throw new Error('could not get posts data');
      });
  }
}

HomeController.$inject = [
  '$PostService'
];
