export class NavController {
  constructor(PageService) {
    PageService.getPages()
      .then(result => this.pages = result.data);
  }
}

NavController.$inject = [
    '$PageService',
];
