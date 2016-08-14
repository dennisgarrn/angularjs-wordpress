export default class PageController {
  constructor($http, $stateParams) {
    let vm = this;
    this.page = $http.get('wp-json/pages/' + $stateParams.ID).then(res => vm.page = res.data);
  }
}
