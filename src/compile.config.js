compile.$inject = ['$compileProvider'];

export default function compile($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}
