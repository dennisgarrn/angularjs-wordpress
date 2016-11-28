export class NavController {
  constructor($PageService) {
    this.PageService = $PageService;
    this.pages = [];
  }

  $onInit() {
    this.getResults();
  }

  getResults() {
    this.PageService.getPages()
      .then((pages) => {
        this.pages = pages.data;
      })
      .catch(() => {
        throw new Error('could not get pages data');
      });
  }

}

NavController.$inject = [
    '$PageService',
];
