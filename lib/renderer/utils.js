exports.isObject = function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
};

exports.mergeObject = function mergeObject(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (exports.isObject(target) && exports.isObject(source)) {
    for (const key in source) {
      if (exports.isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeObject(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeObject(target, ...sources);
};

exports.getOpacity = function getOpacity(props) {
  const match = props.color.match(/^#[0-9a-fA-F]{8}$/);

  if (match == null) return props;

  const opa = match[0].slice(-2);
  const hex = match[0].slice(0, 7);

  const dec = +('0x' + opa) / 255;

  return exports.mergeObject(props, {
    color: hex,
    opacity: dec.toPrecision(2)
  });
};

exports.applyOpacity = function applyOpacity(format) {
  ['data', 'inner', 'outer'].forEach((prop) => {
    exports.mergeObject(format[prop], {
      gradient: {
        start: exports.getOpacity(format[prop].gradient.start),
        end: exports.getOpacity(format[prop].gradient.end)
      }
    });
  });

  return format;
};

exports.getOptions = function getOptions(options) {
  if (!options) options = {};
  if (!options.format) options.format = {};

  const margin =
    typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0
      ? 4
      : options.margin;

  const width =
    options.width && options.width >= 21 ? options.width : undefined;
  const scale = options.scale || 4;

  const merged = exports.mergeObject(
    JSON.parse(JSON.stringify(require('./default').default)),
    options.format
  );

  const format = exports.applyOpacity(merged);

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    type: options.type,
    format: format,
    rendererOpts: options.rendererOpts || {}
  };
};

exports.getScale = function getScale(qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale;
};

exports.getImageWidth = function getImageWidth(qrSize, opts) {
  const scale = exports.getScale(qrSize, opts);
  return Math.floor((qrSize + opts.margin * 2) * scale);
};

exports.getQuadrant = function getQuadrant(x, y, size) {
  return y > size / 2 ? (x > size / 2 ? 3 : 1) : x > size / 2 ? 2 : 0;
};

exports.getNeighbours = function getNeighbours(i, size, data) {
  const bound = [
    Math.floor(i / size) === 0,
    i % size === size - 1,
    Math.floor(i / size) === size - 1,
    i % size === 0
  ];

  return [
    bound[0] ? false : !!data[i - size],
    bound[1] ? false : !!data[i + 1],
    bound[2] ? false : !!data[i + size],
    bound[3] ? false : !!data[i - 1]
  ];
};

exports.getCenterRegions = function getCenterRegions(size) {
  const regions = [];

  for (let i = 0; i < size * size; i++) {
    const col = Math.floor(i % size);
    const row = Math.floor(i / size);
    const center =
      col > size * 0.35 &&
      col < size * 0.65 &&
      row > size * 0.35 &&
      row < size * 0.65;

    if (center) regions.push([row, col]);
  }

  return regions;
};
