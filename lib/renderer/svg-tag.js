const Core = require('../core/qrcode');
const Utils = require('./utils');
const Figures = require('./figures');
const Borders = require('./borders');
const Tags = require('./svg-interp');


function getBorder(shape) {
  return Borders.borders[shape];
}

function getFigure(region, shape, pattern) {
  const scores = Figures.figures[region][shape]
    .map((permutation) => permutation.match)
    .map((match) =>
      match.reduce(
        (total, current, index) =>
          current === pattern[index] ? total + 1 : total,
        0
      )
    );

  return Figures.figures[region][shape][scores.indexOf(Math.max(...scores))].figure;
}

function translate(x, y, content) {
  return `<g transform="translate(${y},${x})">${content}</g>`;
}

function omitCenter(data, size) {
  for (let i = 0; i < data.length; i++) {
    const col = Math.floor(i % size);
    const row = Math.floor(i / size);
    const center =
      col > size * 0.4 &&
      col < size * 0.6 &&
      row > size * 0.4 &&
      row < size * 0.6;

    if (center) data[i] = false;
  }
}

function getMask(points, shape) {
  return points
    .filter((p) => p.value)
    .map((p) =>
      translate(
        p.position[0],
        p.position[1],
        getFigure(p.region, shape, p.neighbours)
      )
    )
    .join('\n');
}

function getPoints(data, size, ver, margin) {
  const points = [];
  const [inner, outer] = Core.getFinderRegions(size, ver);

  for (let i = 0; i < data.length; i++) {
    const col = Math.floor(i % size);
    const row = Math.floor(i / size);

    const region = inner.find((c) => c[0] === row && c[1] === col)
      ? 'inner'
      : outer.find((c) => c[0] === row && c[1] === col)
      ? 'outer'
      : 'data';

    const point = {
      value: data[i],
      region: region,
      position: [row + margin, col + margin],
      quadrant: Utils.getQuadrant(row, col, size),
      neighbours: Utils.getNeighbours(i, size, data)
    };

    points.push(point);
  }

  return points;
}

exports.render = function render(qrData, options, cb) {
  const qr = qrData.modules.data;
  const ver = qrData.version;
  const size = qrData.modules.size;
  const cent = Utils.getCenterRegions(size);
  const opts = Utils.getOptions(options);

  if (opts.format.image) omitCenter(qr, size);

  const border = getBorder(opts.format.border.shape);
  const points = getPoints(qr, size, ver, opts.margin);

  const masks = {
    data: getMask(
      points.filter((p) => p.region === 'data'),
      opts.format.data.shape
    ),
    outer: getMask(
      points.filter((p) => p.region === 'outer'),
      opts.format.outer.shape
    ),
    inner: getMask(
      points.filter((p) => p.region === 'inner'),
      opts.format.inner.shape
    )
  };

  const uid = Math.random();

  const svgTag = Tags.parentTag(uid, {
    children: Tags.qrCodeTag(uid, {
      viewBox: size + opts.margin * 2,
      format: opts.format,
      mask: masks,
      center: {
        offset: cent[0][0] + opts.margin + 0.5,
        width: cent[cent.length - 1][1] - cent[0][0]
      }
    }),
    format: opts.format,
    mask: border.figure
  });

  if (typeof cb === 'function') {
    cb(null, svgTag);
  }

  return svgTag;
};
