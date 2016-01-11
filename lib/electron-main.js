var optionParser = require('./option-parser');
var opts = optionParser.parse(process.argv.slice(2));

var staticServer = require('./static-server');
staticServer.start(opts.path, opts.port);

var previewWindow = require('./preview-window');
previewWindow.create(opts.port, opts.watch, opts.size[0], opts.size[1], opts.margin);
