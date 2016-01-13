var nodeStatic = require('node-static');
var http = require('http');

module.exports = {
  start: function(dirname, port) {
    var file = new nodeStatic.Server(dirname, {
      cache: 0
    });

    http.createServer(function(request, response) {
      request.addListener('end', function() {
        file.serve(request, response);
      }).resume();
    }).listen(port);

    console.log("serving '" + dirname + "' at http://127.0.0.1:" + port);
  }
};
