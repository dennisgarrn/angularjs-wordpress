export default class HomeController {
    constructor(PostService) {
        PostService.getPosts()

        .then(result => this.posts = result.data);
    }
}