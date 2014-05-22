var _ = require('underscore');
var Note = require('../models/Note');

module.exports = function(app) {
  app.get('/', index);
  app.get('/page/:name', page);
};
/**
 * GET /
 * Home page.
 */
var index = function(req, res) {
  Note.find(null, null, {limit: req.appConfig.notes.displayInitial}, function(err, foundNotes) {
    res.render('home', {
       notes: foundNotes,
       config: req.appConfig
    });
  });
};

var page = function(req, res) {
  if (_.contains([
    'ainsleybeyonce',
    'coquiainsley'
    ], req.params.name)) {
    return res.render('pages/' + req.params.name, {
      config: req.appConfig
    });
  }
  res.render('404');
};
