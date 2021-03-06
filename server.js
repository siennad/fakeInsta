// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// configure instagram app with your access token
ig.use({
    access_token: '1480721696.1677ed0.22ae8e22ef8943c1bc64983ccbaaa493',
});

// SET THE ROUTES
// ===================================================
// home page route - our profile's images
app.get('/', function(req, res) {
    // use the instagram package to get popular media
    ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
        // render the home page and pass in the popular images
        res.render('pages/index', { grams: medias });
    });
});

// START THE SERVER
// ==================================================
var server = app.listen(process.env.PORT || 4000, function () {
    var port = server.address().port;
    console.log("App now running on port ", port);
  });
