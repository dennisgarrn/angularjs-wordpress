export default class PostService {
  constructor($http) {
    this.$http = $http;
    this.url = 'wp-json/wp/v2/posts/';
  }
  getPosts() {
    return this.$http.get(this.url);    
  }
}
