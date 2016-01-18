var nodeStatic = require('node-static');
var http = require('http');

module.exports = {
  start: function(dirname, port) {
    var server = new nodeStatic.Server(dirname);
    
    http.createServer(function(request, response) {
      request.addListener('end', function() {
        server.serve(request, response);
      }).resume();
    }).listen(port);

    console.log("serving '" + dirname + "' at http://127.0.0.1:" + port);
  }
};
