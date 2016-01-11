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
      .option('-s, --size <width>x<height>', 'the size of the window', parseSize, [400, 300])
      .option('-m, --margin <n>', 'the margin of the window to the corner', 30)
      .usage('[options] [dirname]')
      .parse(args);

    opts.dirname = opts.args[0] || process.cwd();

    if (!fs.existsSync(opts.dirname) || !fs.statSync(opts.dirname).isDirectory()) {
      console.log("'" + opts.dirname + "' is not a directory");
      process.exit(1);
    }

    var filename = path.join(opts.dirname, 'index.html');
    if (!fs.existsSync(filename) || !fs.statSync(filename).isFile()) {
      console.log("'" + filename + "' does not exist");
      process.exit(1);
    }

    return opts;
  }
};
