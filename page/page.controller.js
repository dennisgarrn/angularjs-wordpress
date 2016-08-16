export default class PageController {
  constructor($http, $stateParams) {
    let vm = this;
    this.page = $http.get('wp-json/wp/v2/pages/' + $stateParams.ID).then(res => vm.page = res.data);
  }
}
