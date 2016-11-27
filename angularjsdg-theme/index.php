<!DOCTYPE html>
<html ng-app="app" lang="en" ng-strict-di>
    <head>
      <title>AngularJS Wordpress Theme</title>
      <base href="/sandbox/">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <?php wp_head(); ?>
    </head>
    <body ng-cloak>
    <!-- Navigation -->
        <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header page-scroll">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        Menu <i class="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand" href="/sandbox"><?php echo get_bloginfo(); ?></a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->

                <navigation></navigation>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container -->
        </nav>
        <ui-view></ui-view>
        <hr>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <p class="copyright text-muted">Copyright &copy; <?php echo date('Y'); ?> <?php echo get_bloginfo(); ?></p>
                    </div>
                </div>
            </div>
        </footer>
    </body>
</html>
