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
        'center': true,
        'alwaysOnTop': true,
        'show': false,
      });

      var scrSize = electron.screen.getPrimaryDisplay().workAreaSize;
      var winPos = win.getPosition();
      var winSize = win.getSize();
      var x, y;

      if (process.platform == 'darwin') {
        x = scrSize.width - width - margin;
        y = scrSize.height - height - margin;
      } else {
        x = winPos[0] + (scrSize.width - winSize[0]) / 2 - margin;
        y = winPos[1] + (scrSize.height - winSize[1]) / 2 - margin;
      }

      win.setPosition(x | 0, y | 0);

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
