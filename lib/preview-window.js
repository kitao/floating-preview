var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var electronReload = require('electron-reload');

module.exports = {
  create: function(dirname, filename, port, width, height, margin) {
    var previewWindow = null;
    var app = electron.app;

    app.on('window-all-closed', function() {
      app.quit();
    });

    app.on('ready', function() {
      var screenSize = electron.screen.getPrimaryDisplay().workAreaSize;

      previewWindow = new BrowserWindow({
        'title': '',
        'x': screenSize.width - width - margin,
        'y': screenSize.height - height - margin,
        'width': width,
        'height': height,
        'use-content-size': true,
        'always-on-top': true
      });

      var url = 'http://localhost:' + port + '/' + filename;
      console.log("open '" + url + "' in Electron");
      previewWindow.loadURL(url);

      previewWindow.on('unresponsive', function() {
        console.log('unresponsive');
      });

      previewWindow.on('closed', function() {
        previewWindow = null;
      });
    });

    electronReload(dirname, {
      electron: require('electron-prebuilt')
    });
  }
};
