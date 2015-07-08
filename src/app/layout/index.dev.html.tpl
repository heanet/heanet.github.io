<!DOCTYPE html>
<html ng-app="heanet">
<head lang="en">
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Heanet</title>
    <link href="<%- css_vendor %>" type="text/css" rel="stylesheet">
    <link href="<%- css_custom %>" type="text/css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,600,400' rel='stylesheet' type='text/css'>
</head>
<body>

<!-- top nav -->
<nav class="navbar navbar-default navbar-static-top">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="http://www.heanet.ie"><img src="/img/heanet-logo.png" title="HEAnet"></a>
                </div><!-- /.navbar-header -->
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#/">Home</a></li>
                        <li><a href="http://www.heanet.ie">Heanet</a></li>
                    </ul>
                </div><!-- /.nav-collapse -->
            </div><!-- /col-lg-10 -->
        </div><!-- /row -->
    </div><!-- /.container -->
</nav>

<div ng-view></div>

<!-- pre-footer -->
<div class="pre-footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1">
                <div class="row">
                    <div class="col-sm-4">
                        <h3>Address</h3>
                        <p>HEAnet Ltd,<br />1st Floor,<br>5 George's Dock,<br>I.F.S.C.,<br>Dublin 1,<br>Ireland.</p>
                    </div><!-- /.col-sm-4 -->
                    <div class="col-sm-4">
                        <h3>Contact</h3>
                        <p>General Inquiries:<br>Tel: +353 (0) 1 660 9040<br>Email: <a href="mailto:info@heanet.ie">info@heanet.ie</a></p>
                        <p>HEAnet Support:<br>Tel: +353 (0) 1 660 9040<br>Email: <a href="mailto:noc@heanet.ie">noc@heanet.ie</a></p>
                        <p>Schools Broadband Support:<br>Tel: 1800 33 44 66<br>Email: <a href="mailto:broadbandservicedesk@pdst.ie">broadbandservicedesk@pdst.ie</a></p>
                    </div><!-- /.col-sm-4 -->
                    <div class="col-sm-4">
                        <h3>Github Pages</h3>
                        <p><a href="https://github.com/heanet/moodle_media">Moodle media.heanet.ie integration</a></p>
                        <p><a href="https://github.com/heanet/heanet.github.io">Heanet Github Page</a></p>
                    </div><!-- /.col-sm-4 -->
                </div><!-- /.row -->
            </div><!-- /.col-lg-10 -->
        </div><!-- /.row -->
    </div><!-- /.container -->
</div><!-- /.pre-footer -->

<!-- footer -->
<footer>
    <div class="container text-center">
        <a class="footer-logo" href="http://www.heanet.ie" target="_blank">
            <img src="/img/heanet_globe_bw.png" title="HEAnet">
        </a>
    </div>
    <!-- /.container -->
</footer>
<script src="<%- js_vendor %>"></script>
<script src="<%- js_custom %>"></script>
</body>
</html>
