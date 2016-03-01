var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var electronReload = require('electron-reload');

module.exports = {
  create: function(dirname, filename, port, width, height, margin, zoom) {
    var win = null;
    var app = electron.app;

    app.commandLine.appendSwitch('disable-http-cache');

    app.on('window-all-closed', function() {
      app.quit();
    });

    app.on('ready', function() {
      win = new BrowserWindow({
        'title': '',
        'width': width,
        'height': height,
        'zoomFactor': zoom / 100,
        'useContentSize': true,
        'alwaysOnTop': true,
        'show': false,
      });

      var workArea = electron.screen.getPrimaryDisplay().workArea;
      var winSize = win.getSize();
      var winX = workArea.x + workArea.width - winSize[0] - margin;
      var winY = workArea.y + workArea.height - winSize[1] - margin;

      win.setPosition(winX, winY);

      var url = 'http://127.0.0.1:' + port + '/' + filename;
      console.log("open '" + url + "' in Electron");
      win.loadURL(url);

      win.on('unresponsive', function() {
        console.log('unresponsive');
      });

      win.on('closed', function() {
        win = null;
      });

      win.show();
    });

    electronReload(dirname, {
      electron: require('electron-prebuilt')
    });
  }
};
