var nodeStatic = require('node-static');
var http = require('http');

module.exports = {
  start: function(path, port) {
    var file = new nodeStatic.Server(path, { cache: 0 });

    http.createServer(function (request, response) {
      request.addListener('end', function () {
        file.serve(request, response);
      }).resume();
    }).listen(port);
  }
};
