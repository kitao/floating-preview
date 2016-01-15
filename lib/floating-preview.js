var electron = require('electron-prebuilt');
var proc = require('child_process');

module.exports = {
  run: function(args) {
    var child = proc.spawn(
      electron, [__dirname + '/electron-main.js'].concat(args));
    child.stdout.on('data', function(data) {
      process.stdout.write(data);
    });
  }
};
