var fs = require('fs');
var path = require('path');
var opts = require('commander');
var pjson = require('../package.json');

function parseSize(val) {
  return val.split('x').map(parseFloat);
}

module.exports = {
  parse: function(args) {
    opts
      .version(pjson.version)
      .option('-p, --port <n>', 'the port number for the http server', 9999)
      .option('-w, --watch <dirname>', 'the root of the files to be watched', String)
      .option('-s, --size <width>x<height>', 'the size of the window', parseSize, [400, 300])
      .option('-m, --margin <n>', 'the margin of the window to the corner', 30)
      .usage('[options] [path]')
      .parse(args);

    opts.path = opts.args[0] || process.cwd();

    if (!opts.watch && fs.existsSync(opts.path)) {
      var stat = fs.statSync(opts.path);
      opts.watch = stat.isFile() ? path.dirname(opts.path) : opts.path;
    }

    return opts;
  }
};
