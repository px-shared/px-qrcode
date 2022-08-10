exports.qrCodeTag = function qrCodeTag(options) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${options.viewBox} ${options.viewBox}" shape-rendering="geometricPrecision">
    <defs>
    <linearGradient id="patternData" x1="${options.format.data.start[0]}" y1="${options.format.data.start[1]}" x2="${options.format.data.end[0]}" y2="${options.format.data.end[1]}">
    <stop offset="0%" stop-color="${options.format.data.gradient[0]}"></stop>
    <stop offset="100%" stop-color="${options.format.data.gradient[1]}"></stop>
    </linearGradient>
    <linearGradient id="patternInner" x1="${options.format.inner.start[0]}" y1="${options.format.inner.start[1]}" x2="${options.format.inner.end[0]}" y2="${options.format.inner.end[1]}">
    <stop offset="0%" stop-color="${options.format.inner.gradient[0]}"></stop>
    <stop offset="100%" stop-color="${options.format.inner.gradient[1]}"></stop>
    </linearGradient>
    <linearGradient id="patternOuter" x1="${options.format.outer.start[0]}" y1="${options.format.outer.start[1]}" x2="${options.format.outer.end[0]}" y2="${options.format.outer.end[1]}">
    <stop offset="0%" stop-color="${options.format.outer.gradient[0]}"></stop>
    <stop offset="100%" stop-color="${options.format.outer.gradient[1]}"></stop>
    </linearGradient>
    <pattern id="patternImage" viewBox="0 0  ${options.viewBox} ${options.viewBox}" x="0" y="0" width="100%" height="100%">
    <image href="${options.format.image}" width="100%" height="100%"></image>
    </pattern>
    <mask id="maskData"><g fill="#fff" stroke="#fff" stroke-width="0.04">${options.mask.data}</g></mask>
    <mask id="maskInner"><g fill="#fff" stroke="#fff" stroke-width="0.02">${options.mask.inner}</g></mask>
    <mask id="maskOuter"><g fill="#fff" stroke="#fff" stroke-width="0.02">${options.mask.outer}</g></mask>
    <mask id="maskCenter"><g fill="#fff" stroke="#fff" stroke-width="0.04">${options.mask.center}</g></mask>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="${options.format.background}"></rect>
    <rect x="0" y="0" width="100%" height="100%" mask="url(#maskData)" fill="url(#patternData)"></rect>
    <rect x="0" y="0" width="100%" height="100%" mask="url(#maskInner)" fill="url(#patternInner)"></rect>
    <rect x="0" y="0" width="100%" height="100%" mask="url(#maskOuter)" fill="url(#patternOuter)"></rect>
    <rect x="${options.center.offset}" y="${options.center.offset}" width="${options.center.width}" height="${options.center.width}" fill="url(#patternImage)"></rect>
    </svg>`;
};

exports.parentTag = function parentTag(options) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" shape-rendering="geometricPrecision">
    <g transform="translate(0,0)">
    ${options.children}
    </g>
    <defs>
    <linearGradient id="patternBorder" x1="${options.format.border.start[0]}" y1="${options.format.border.start[1]}" x2="${options.format.border.end[0]}" y2="${options.format.border.end[1]}">
    <stop offset="0%" stop-color="${options.format.border.gradient[0]}"></stop>
    <stop offset="100%" stop-color="${options.format.border.gradient[1]}"></stop>
    </linearGradient>
    <mask id="maskBorder"><g fill="#fff">${options.mask}</g></mask>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" mask="url(#maskBorder)" fill="url(#patternBorder)"></rect>
    </svg>`;
};
