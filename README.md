# floating-preview

floating-preview is a simple browser which shows a web page in a small window always on top and reloads automatically.

## How to Install

### Preparation

In order to use floating-preview, installation of Node.js is required. Node.js can be obtained from [the official site](https://nodejs.org/).

In a proxy environment such as in an office, the following settings are also needed:
- Set the proxy server with the `npm config set proxy` and `npm config set https-proxy` commands
- If on Windows, set the `http_proxy` and `https_proxy` environment variables to install the electron-prebuilt module

### Installing floating-preview

floating-preview can be installed with the `npm` command of Node.js.

```bash
$ npm -g install floating-preview
```

If a permission error occured while installation, please add the sudo command at the head of the above command like this:

```bash
$ sudo npm -g install floating-preview
```

## How to Use

### Usage

```bash
floating-preview [options] [path]
```

Both file and directory names can be specified as a path.

### Examples

Open the `index.html` in the current directory and watches the files in the same directory to reload.

```bash
$ floating-preview
```

Open the `index.html` in the `src` directory and watches the files in it.

```bash
$ floating-preview src
```

Open the `app.js` and watches the files in the same directory.

```bash
$ floating-preview app.js
```

Open the `app.js` in a window whose size is 400x300.

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
