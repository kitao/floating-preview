var optionParser = require('./option-parser');
var staticServer = require('./static-server');
var previewWindow = require('./preview-window');

var opts = optionParser.parse(process.argv.slice(2));

staticServer.start(opts.dirname, opts.port);

previewWindow.create(
  opts.dirname, opts.filename, opts.port,
  opts.size[0], opts.size[1], opts.margin, opts.zoom);
