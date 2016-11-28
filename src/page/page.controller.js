export class PageController {
  constructor($http, $stateParams) {
    this.http = $http;
    this.stateParams = $stateParams;
    this.page = {};
  }

  $onInit() {
    this.getResults();
  }

  getResults(){
    this.http.get('wp-json/wp/v2/pages/' + this.stateParams.ID)
      .then((page) => {
        this.page = page.data;
      }).catch(() => {
        throw new Error('Page data not found');
      });
  };

}

PageController.$inject = [
  '$http',
  '$stateParams'
];
