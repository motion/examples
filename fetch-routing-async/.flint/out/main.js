!function() { return Flint.file('/main.js', function(exports) {// api
"use strict";var _bluebird = require("bluebird");Object.defineProperty(exports, "__esModule", { value: true });var api = {};exports.api = api;

api.base = 'http://api.are.na/v2';
api.channels = api.base + "/channels";

api.user = function (id) {return api.base + "/users/" + id;};
api.user.channels = function (id) {return api.base + "/users/" + id + "/channels";};
api.channel = function (id) {return api.base + "/channels/" + id;};
api.block = function (id) {return api.base + "/blocks/" + id;};

Flint.view("Main", "-174165786", function (view, on) {
  var project = undefined;

  view.update(view._render = function () {return view.el(0, "Flint.MainWrapper", {view: view}, (project) && view.el(1, "Project", {if: project, id: project}), 
  (!project) && view.el(2, "Home", {if: !project, onSelectProject: function (p) {return view.update(project = p);}})
    );});});
/* end view: Main */;


Flint.view("Home", "-2018635386", function (view, on) {var 























  load = _bluebird.coroutine(function* () {
    view.update(user = yield fetchJSON(api.user('414')));
    // projects = await fetchJSON(api.user.channels('414'))
    view.update(fetched = true);});var fetched = false;var user = {};var projects = [{ name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' }, { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' }, { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' }, { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' }, { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' }, { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' }, { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' }, { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' }, { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' }, { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' }, { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' }, { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' }, { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' }, { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' }, { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' }, { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' }];load();


  view.update(view._render = function () {return view.el(3, "Flint.HomeWrapper", {view: view}, (!fetched) && view.el(4, "loading", {if: !fetched}, 
    "Loading..."
  ), 
  (fetched) && view.el(5, "home", {if: fetched}, 
    view.el(6, "h1", null, user.full_name), 
    view.el(7, "img", {src: user.avatar}), 
    view.el(8, "h2", null, "seecoy@me.com"), 

    view.el(9, "projects", null, 
      projects.__flintmap(function(_, _index) { return view.el(function() { return [_index, 10] }, "item", {repeat: projects}, 
        view.el(11, "h4", null, _.name)
      ) })
    )
  )

    );});
  view.styles.$projects = function(_index) { return { 
    position: 'absolute', 
    top: 100, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    padding: 20 }};});

/* end view: Home */;


Flint.view("Project", "2075582495", function (view, on) {var 





  load = _bluebird.coroutine(function* () {
    var data = yield fetchJSON(api.channel(view.props.id));
    view.update(contents = data.contents);
    view.update(fetched = true);});var fetched = false;var contents = [];load();


  view.update(view._render = function () {return view.el(12, "Flint.ProjectWrapper", {view: view}, (!fetched) && view.el(13, "loading", {if: !fetched}, 
    "Loading..."
  ), 
  (fetched) && contents.__flintmap(function(_, _index) { return view.el(function() { return [_index, 14] }, "contents", {if: fetched, repeat: contents}, 
    view.el(15, "h1", null, _.title), 
    (_.image) && view.el(16, "img", {if: _.image, src: _.image.display.url})
  ) })
    );});});
/* end view: Project */;;return exports }) }();