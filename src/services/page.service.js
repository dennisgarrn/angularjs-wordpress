export class PageService {
  constructor($http) {
    this.$http = $http;
    this.url = 'wp-json/wp/v2/pages/';
  }
  getPages() {
    return this.$http.get(this.url);    
  }
}

PageService.$inject = [
  '$http'
];
