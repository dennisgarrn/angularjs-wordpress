export class PageService {
  constructor($http) {
    this.$http = $http;
    this.url = 'wp-json/wp/v2/pages';
  }
  getPages(urlParams = {}) {
    return this.$http.get(this.url, {
      params: urlParams
    });    
  }
}

PageService.$inject = [
  '$http'
];
