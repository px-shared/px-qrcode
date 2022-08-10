exports.mergeObject = function mergeObject(a, b) {
  const merged = Object.entries(b).reduce((o, [k, v]) => {
    o[k] =
      v && typeof v === 'object'
        ? mergeObject((o[k] = o[k] || (Array.isArray(v) ? [] : {})), v)
        : v;
    return o;
  }, a);

  return Object.assign({}, merged);
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

  const format = exports.mergeObject(
    require('./default').default,
    options.format
  );

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
      col > size * 0.4 &&
      col < size * 0.6 &&
      row > size * 0.4 &&
      row < size * 0.6;

    if (center) regions.push([row, col]);
  }

  return regions;
};
