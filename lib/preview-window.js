var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var electronReload = require('electron-reload');

module.exports = {
  create: function(dirname, filename, port, width, height, margin, zoom) {
    var previewWindow = null;
    var app = electron.app;

    app.on('window-all-closed', function() {
      app.quit();
    });

    app.on('ready', function() {
      previewWindow = new BrowserWindow({
        'title': '',
        'zoomFactor': zoom / 100,
        'alwaysOnTop': true
      });

      var screenSize = electron.screen.getPrimaryDisplay().workAreaSize;
      previewWindow.setPosition(
        screenSize.width - width - margin,
        screenSize.height - height - margin);
      previewWindow.setContentSize(width, height);

      previewWindow.setMenuBarVisibility(false);
      previewWindow.setAutoHideMenuBar(true);

      var url = 'http://127.0.0.1:' + port + '/' + filename;
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
