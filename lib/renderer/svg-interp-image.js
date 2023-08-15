exports.qrCodeTag = function qrCodeTag(uid, options) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${options.viewBox} ${options.viewBox}" shape-rendering="geometricPrecision">
    <defs>
    <linearGradient id="${uid}__patternData" x1="${options.format.data.gradient.start.x}" y1="${options.format.data.gradient.start.y}" x2="${options.format.data.gradient.end.x}" y2="${options.format.data.gradient.end.y}">
    <stop offset="0%" stop-color="${options.format.data.gradient.start.color}" stop-opacity="${options.format.data.gradient.start.opacity}"></stop>
    <stop offset="100%" stop-color="${options.format.data.gradient.end.color}" stop-opacity="${options.format.data.gradient.end.opacity}"></stop>
    </linearGradient>
    <linearGradient id="${uid}__patternInner" x1="${options.format.inner.gradient.start.x}" y1="${options.format.inner.gradient.start.y}" x2="${options.format.inner.gradient.end.x}" y2="${options.format.inner.gradient.end.y}">
    <stop offset="0%" stop-color="${options.format.inner.gradient.start.color}" stop-opacity="${options.format.inner.gradient.start.opacity}"></stop>
    <stop offset="100%" stop-color="${options.format.inner.gradient.end.color}" stop-opacity="${options.format.inner.gradient.end.opacity}"></stop>
    </linearGradient>
    <linearGradient id="${uid}__patternOuter" x1="${options.format.outer.gradient.start.x}" y1="${options.format.outer.gradient.start.y}" x2="${options.format.outer.gradient.end.x}" y2="${options.format.outer.gradient.end.y}">
    <stop offset="0%" stop-color="${options.format.outer.gradient.start.color}" stop-opacity="${options.format.outer.gradient.start.opacity}"></stop>
    <stop offset="100%" stop-color="${options.format.outer.gradient.end.color}" stop-opacity="${options.format.outer.gradient.end.opacity}"></stop>
    </linearGradient>
    <mask id="${uid}__maskData"><g fill="#fff" stroke="#fff" stroke-width="0.04">${options.mask.data}</g></mask>
    <mask id="${uid}__maskInner"><g fill="#fff" stroke="#fff" stroke-width="0.02">${options.mask.inner}</g></mask>
    <mask id="${uid}__maskOuter"><g fill="#fff" stroke="#fff" stroke-width="0.02">${options.mask.outer}</g></mask>
    <mask id="${uid}__maskCenter"><g fill="#fff" stroke="#fff" stroke-width="0.04">${options.mask.center}</g></mask>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="${options.format.background}"></rect>
    <rect x="0" y="0" width="100%" height="100%" mask="url(#${uid}__maskData)" fill="url(#${uid}__patternData)"></rect>
    <rect x="0" y="0" width="100%" height="100%" mask="url(#${uid}__maskInner)" fill="url(#${uid}__patternInner)"></rect>
    <rect x="0" y="0" width="100%" height="100%" mask="url(#${uid}__maskOuter)" fill="url(#${uid}__patternOuter)"></rect>
    <image href="${options.format.image}" x="${options.center.offset}" y="${options.center.offset}" width="${options.center.width}" height="${options.center.width}"></image>
    </svg>`;
};
