const canPromise = require('./can-promise');
const QRCode = require('./core/qrcode');
const SvgRenderer = require('./renderer/svg');

function checkParams(text, opts, cb) {
  if (typeof text === 'undefined') {
    throw new Error('String required as first argument');
  }

  if (typeof cb === 'undefined') {
    cb = opts;
    opts = {};
  }

  if (typeof cb !== 'function') {
    if (!canPromise()) {
      throw new Error('Callback required as last argument');
    } else {
      opts = cb || {};
      cb = null;
    }
  }

  return {
    opts: opts,
    cb: cb
  };
}

function getTypeFromFilename(path) {
  return path.slice(((path.lastIndexOf('.') - 1) >>> 0) + 2).toLowerCase();
}

function getRendererFromType(type) {
  switch (type) {
    case 'svg':
    case 'txt':
    case 'utf8':
    case 'png':
    case 'image/png':
    default:
      return SvgRenderer;
  }
}

function getStringRendererFromType(type) {
  switch (type) {
    case 'svg':
    case 'terminal':
    case 'utf8':
    default:
      return SvgRenderer;
  }
}

function render(renderFunc, text, params) {
  if (!params.cb) {
    return new Promise(function (resolve, reject) {
      try {
        const data = QRCode.create(text, params.opts);
        return renderFunc(data, params.opts, function (err, data) {
          return err ? reject(err) : resolve(data);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  try {
    const data = QRCode.create(text, params.opts);
    return renderFunc(data, params.opts, params.cb);
  } catch (e) {
    params.cb(e);
  }
}

exports.create = QRCode.create;

exports.toString = function toString(text, opts, cb) {
  const params = checkParams(text, opts, cb);
  const type = params.opts ? params.opts.type : undefined;
  const renderer = getStringRendererFromType(type);
  return render(renderer.render, text, params);
};

exports.toFile = function toFile(path, text, opts, cb) {
  if (
    typeof path !== 'string' ||
    !(typeof text === 'string' || typeof text === 'object')
  ) {
    throw new Error('Invalid argument');
  }

  if (arguments.length < 3 && !canPromise()) {
    throw new Error('Too few arguments provided');
  }

  const params = checkParams(text, opts, cb);
  const type = params.opts.type || getTypeFromFilename(path);
  const renderer = getRendererFromType(type);
  const renderToFile = renderer.renderToFile.bind(null, path);

  return render(renderToFile, text, params);
};
