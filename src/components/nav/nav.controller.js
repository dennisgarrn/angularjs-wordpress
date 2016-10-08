export default class NavController {
  constructor(PageService) {
    PageService.getPages()
    .then(result => this.pages = result.data);
  }
}
