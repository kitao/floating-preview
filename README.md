# floating-preview

floating-preview is a simple browser which shows a web page in a small window always on top and reloads automatically.

![floating-preview](https://raw.githubusercontent.com/kitao/floating-preview/master/floating-preview.gif)

## How to Install

### Preparation

In order to use floating-preview, installation of Node.js is required. Node.js can be obtained from [the official site](https://nodejs.org/).

In a proxy environment, the following settings are also needed:
- Set the proxy server with the `npm config set proxy` and `npm config set https-proxy` commands
- If on Windows, set the `http_proxy` and `https_proxy` environment variables to install the electron-prebuilt module

### Installing floating-preview

floating-preview can be installed with the `npm` command of Node.js.

```bash
$ npm -g install floating-preview
```

If a permission error occured while installation, please add the `sudo` command at the head of the above command.

## How to Use

### Usage

```
floating-preview [options] [path]
```

Both file and directory names can be specified as a path.

### Examples

Open the `index.html` file in the current directory and watch the changes under the same directory to reload.

```bash
$ floating-preview
```

Open the `index.html` file in the `src` directory and watch the changes under it.

```bash
$ floating-preview src
```

Open the `app.js` file and watch the changes under the same directory.

```bash
$ floating-preview app.js
```

Open the `app.js` file in a window whose size is 400x300.

```bash
$ floating-preview -s 400x300 app.js
```

### Options

```
-h, --help                   output usage information
-V, --version                output the version number
-p, --port <n>               the port number for the http server
-s, --size <width>x<height>  the size of the window
-m, --margin <n>             the margin of the window to the corner
-z, --zoom <n>               the zoom percentage of the content
```

## License

floating-preview is under [MIT license](http://en.wikipedia.org/wiki/MIT_License).
