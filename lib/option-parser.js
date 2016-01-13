var fs = require('fs');
var path = require('path');
var opts = require('commander');
var pjson = require('../package.json');

function parseSize(val) {
  return val.split('x').map(parseFloat);
}

function assertExists(path) {
  if (!fs.existsSync(path)) {
    console.log("'" + path + "' does not exist");
    process.exit(1);
  }
}

module.exports = {
  parse: function(args) {
    opts
      .version(pjson.version)
      .option('-p, --port <n>', 'the port number for the http server', 9999)
      .option('-s, --size <width>x<height>', 'the size of the window', parseSize, [400, 300])
      .option('-m, --margin <n>', 'the margin of the window to the corner', 30)
      .usage('[options] [path]')
      .parse(args);

    opts.path = opts.args[0] || '.';
    assertExists(opts.path);

    if (fs.statSync(opts.path).isFile()) {
      opts.filename = path.basename(opts.path);
      opts.dirname = path.dirname(opts.path);
    } else {
      opts.filename = 'index.html';
      opts.dirname = opts.path;
      assertExists(path.join(opts.dirname, opts.filename));
    }

    return opts;
  }
};
