exports.figures = {
  center: {
    square: [
      {
        match: [false, false, false, false],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      }
    ]
  },
  data: {
    square: [
      {
        match: [true, false, true, false],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      }
    ],
    circle: [
      {
        match: [false, false, false, false],
        figure: "<circle cx='0.5' cy='0.5' r='0.5'/>"
      }
    ],
    dot: [
      {
        match: [false, false, false, false],
        figure: "<circle cx='0.5' cy='0.5' r='0.375'/>"
      }
    ],
    hex: [
      {
        match: [false, false, false, false],
        figure: "<path d='M 0.72 0.86 H 0.27 L 0 0.4 L 0.27 0 h 0.47 l 0.27 0.4 L 0.72 0.86 z z'></path>"
      }
    ],
    rounded: [
      {
        match: [false, false, false, false],
        figure: "<rect width='0.9' height='0.9' rx='0.3' ry='0.3'></rect>"
      }
    ],
    star: [
      {
        match: [false, false, false, false],
        figure:
          "<path d='M 0.5333 0.05 l 0.1 0.2167 C 0.6667 0.3 0.6833 0.3167 0.7167 0.3167 l 0.2333 0.0333 c 0.0333 0 0.05 0.05 0.0333 0.0833 l -0.1667 0.1667 C 0.7833 0.6167 0.7833 0.65 0.7833 0.6833 L 0.8333 0.9167 c 0 0.0333 -0.0333 0.0667 -0.0667 0.05 L 0.55 0.8667 c -0.0333 -0.0167 -0.0667 -0.0167 -0.1 0 L 0.2333 0.9667 C 0.2 0.9833 0.1667 0.9667 0.1667 0.9167 l 0.0333 -0.2333 c 0 -0.0333 0 -0.0667 -0.0333 -0.0833 l -0.1667 -0.1667 C -0.0167 0.4 0 0.3667 0.0333 0.35 l 0.2333 -0.0333 c 0.0333 0 0.0667 -0.0333 0.0833 -0.05 l 0.1 -0.2167 C 0.4833 0.0167 0.5167 0.0167 0.5333 0.05 z'></path>"
      }
    ],
    pixel: [
      {
        match: [false, false, false, false],
        figure:
          "<path transform='' d='M 0.15 0.15 H 0.85 V 0.85 H 0.15 Z'></path>"
      }
    ],
    diamond: [
      {
        match: [false, false, false, false],
        figure:
          "<path transform='translate(0.5, -0.25) rotate(45)' d='M 0.15 0.15 H 0.85 V 0.85 H 0.15 Z'></path>"
      }
    ],
    vertical: [
      {
        match: [false, false, false, false],
        figure:
          "<path d='M 0.9167 0.5 A 0.4167 0.4167 90 0 1 0.5 0.9167 A 0.4167 0.4167 90 0 1 0.0833 0.5 A 0.4167 0.4167 90 0 1 0.5 0.0833 A 0.4167 0.4167 90 0 1 0.9167 0.5 Z'></path>"
      },
      {
        match: [true, false, true, false],
        figure: "<path d='m 0.0833 0 h 0.8333 v 1 h -0.8333 z'></path>"
      },
      {
        match: [false, false, true, false],
        figure:
          "<path d='M 0.9167 1 h -0.8333 V 0.5 c 0 -0.2333 0.1833 -0.4167 0.4167 -0.4167 h 0 c 0.2333 0 0.4167 0.1833 0.4167 0.4167 V 1 z'></path>"
      },
      {
        match: [true, false, false, false],
        figure:
          "<path d='M 0.5 0.9167 L 0.5 0.9167 C 0.2667 0.9167 0.0833 0.7333 0.0833 0.5 V 0 h 0.8333 v 0.5 C 0.9167 0.7333 0.7333 0.9167 0.5 0.9167 z'></path>"
      }
    ],
    ribbon: [
      {
        match: [false, false, false, false],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },
      {
        match: [true, false, true, false],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },
      {
        match: [false, false, true, false],
        figure: "<polygon points='1,1 0,1 0,0 0.5,0.5 1,0 '></polygon>"
      },
      {
        match: [true, false, false, false],
        figure: "<polygon points='1,1 0.5,0.5 0,1 0,0 1,0 '></polygon>"
      }
    ],
    smooth: [
      {
        match: [false, false, false, false],
        figure: "<circle cx='0.5' cy='0.5' r='0.5'/>"
      },

      {
        match: [true, false, true, false],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },
      {
        match: [false, true, false, true],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },

      {
        match: [true, false, false, false],
        figure:
          "<path d='M 0.5 1 L 0.5 1 C 0.2167 1 0 0.7833 0 0.5 V 0 h 1 v 0.5 C 1 0.7833 0.7833 1 0.5 1 z'></path>"
      },
      {
        match: [false, true, false, false],
        figure:
          "<path d='M 1 1 H 0.5 C 0.2167 1 0 0.7833 0 0.5 v 0 c 0 -0.2833 0.2167 -0.5 0.5 -0.5 h 0.5 C 1 0 1 1 1 1 z'></path>"
      },
      {
        match: [false, false, true, false],
        figure:
          "<path d='M 1 1 H 0 V 0.5 c 0 -0.2833 0.2167 -0.5 0.5 -0.5 h 0 c 0.2833 0 0.5 0.2167 0.5 0.5 V 1 z'></path>"
      },
      {
        match: [false, false, false, true],
        figure:
          "<path d='M 0.5 1 H 0 V 0 l 0.5 0 c 0.2833 0 0.5 0.2167 0.5 0.5 v 0 C 1 0.7833 0.7833 1 0.5 1 z'></path>"
      },

      {
        match: [true, true, false, false],
        figure:
          "<path d='M 1 1 H 0.5 C 0.2167 1 0 0.7833 0 0.5 V 0 l 1 0 V 1 z'></path>"
      },
      {
        match: [false, true, true, false],
        figure:
          "<path d='M 1 1 H 0 V 0.5 c 0 -0.2833 0.2167 -0.5 0.5 -0.5 l 0.5 0 V 1 z'></path>"
      },
      {
        match: [false, false, true, true],
        figure:
          "<path d='M 1 1 H 0 V 0 l 0.5 0 c 0.2833 0 0.5 0.2167 0.5 0.5 V 1 z'></path>"
      },
      {
        match: [true, false, false, true],
        figure:
          "<path d='M 0.5 1 H 0 V 0 l 1 0 v 0.5 C 1 0.7833 0.7833 1 0.5 1 z'></path>"
      }
    ],
    node: [
      {
        match: [false, false, false, false],
        figure: "<circle cx='0.5' cy='0.5' r='0.375'/>"
      },

      {
        match: [true, true, true, true],
        figure:
          "<path d='M 0.6667 0 H 0.3333 c 0 0.1833 -0.15 0.3333 -0.3333 0.3333 v 0.3333 c 0.1833 0 0.3333 0.15 0.3333 0.3333 h 0.3333 c 0 -0.1833 0.15 -0.3333 0.3333 -0.3333 V 0.3333 C 0.8167 0.3333 0.6667 0.1833 0.6667 0 z'></path>"
      },

      {
        match: [true, false, false, false],
        figure:
          "<path d='M 0.1333 0.5 c 0 0.2 0.1667 0.3667 0.3667 0.3667 s 0.3667 -0.1667 0.3667 -0.3667 c 0 -0.1 -0.05 -0.2 -0.1167 -0.2667 C 0.7 0.1667 0.6667 0.0833 0.6667 0 H 0.3333 c 0 0.0833 -0.0333 0.1667 -0.1 0.2333 C 0.1667 0.3 0.1333 0.4 0.1333 0.5 z'></path>"
      },
      {
        match: [false, true, false, false],
        figure:
          "<path d='M 0.5 0.1333 c -0.2 0 -0.3667 0.1667 -0.3667 0.3667 s 0.1667 0.3667 0.3667 0.3667 c 0.1 0 0.2 -0.05 0.2667 -0.1167 C 0.8333 0.7 0.9167 0.6667 1 0.6667 V 0.3333 C 0.9167 0.3333 0.8333 0.3 0.7667 0.2333 C 0.7 0.1667 0.6 0.1333 0.5 0.1333 z'></path>"
      },
      {
        match: [false, false, true, false],
        figure:
          "<path d='M 0.8667 0.5 c 0 -0.2 -0.1667 -0.3667 -0.3667 -0.3667 S 0.1333 0.3 0.1333 0.5 c 0 0.1 0.05 0.2 0.1167 0.2667 C 0.3 0.8333 0.3333 0.9167 0.3333 1 h 0.3333 c 0 -0.0833 0.0333 -0.1667 0.1 -0.2333 C 0.8333 0.7 0.8667 0.6 0.8667 0.5 z'></path>"
      },
      {
        match: [false, false, false, true],
        figure:
          "<path d='M 0.5 0.8667 c 0.2 0 0.3667 -0.1667 0.3667 -0.3667 S 0.7 0.1333 0.5 0.1333 C 0.4 0.1333 0.3 0.1667 0.2333 0.2333 C 0.1667 0.3 0.0833 0.3333 0 0.3333 v 0.3333 c 0.0833 0 0.1667 0.0333 0.2333 0.1 C 0.3 0.8333 0.4 0.8667 0.5 0.8667 z'></path>"
      },

      {
        match: [true, true, false, false],
        figure:
          "<path d='M 0.7667 0.2333 C 0.7667 0.2333 0.7667 0.2333 0.7667 0.2333 C 0.7 0.1667 0.6667 0.0833 0.6667 0 H 0.3333 c 0 0.0833 -0.0333 0.1667 -0.0833 0.2167 l 0 0 C 0.1667 0.3 0.1333 0.3833 0.1333 0.5 c 0 0.2 0.1667 0.3667 0.3667 0.3667 c 0.1 0 0.1833 -0.0333 0.25 -0.1 l 0 0 C 0.8167 0.7 0.9 0.6667 1 0.6667 V 0.3333 C 0.9167 0.3333 0.8333 0.3 0.7667 0.2333 z'></path>"
      },
      {
        match: [true, false, true, false],
        figure:
          "<path d='M 0.3333 0 C 0.3333 0.0833 0.3 0.1667 0.25 0.2334 C 0.1667 0.3001 0.1335 0.3833 0.1335 0.5 C 0.1335 0.6167 0.1667 0.6999 0.25 0.7832 C 0.3 0.8332 0.3333 0.9167 0.3333 1 L 0.6667 1 C 0.6667 0.9167 0.7 0.8332 0.75 0.7832 C 0.8333 0.6999 0.8665 0.6167 0.8665 0.5 C 0.8665 0.3833 0.8333 0.3001 0.75 0.2334 C 0.7 0.1667 0.6667 0.0833 0.6667 0 L 0.3333 0 z'></path>"
      },
      {
        match: [true, false, false, true],
        figure:
          "<path d='M 0.2333 0.2333 C 0.2333 0.2333 0.2333 0.2333 0.2333 0.2333 C 0.1667 0.3 0.0833 0.3333 0 0.3333 v 0.3333 c 0.0833 0 0.1667 0.0333 0.2167 0.0833 l 0 0 C 0.3 0.8333 0.3833 0.8667 0.5 0.8667 c 0.2 0 0.3667 -0.1667 0.3667 -0.3667 c 0 -0.1 -0.0333 -0.1833 -0.1 -0.25 l 0 0 C 0.7 0.1833 0.6667 0.1 0.6667 0 H 0.3333 C 0.3333 0.0833 0.3 0.1667 0.2333 0.2333 z'></path>"
      },
      {
        match: [false, true, true, false],
        figure:
          "<path d='M 0.7667 0.7667 C 0.7667 0.7667 0.7667 0.7667 0.7667 0.7667 C 0.8333 0.7 0.9167 0.6667 1 0.6667 V 0.3333 C 0.9167 0.3333 0.8333 0.3 0.7833 0.25 l 0 0 C 0.7 0.1667 0.6167 0.1333 0.5 0.1333 c -0.2 0 -0.3667 0.1667 -0.3667 0.3667 c 0 0.1 0.0333 0.1833 0.1 0.25 l 0 0 C 0.3 0.8167 0.3333 0.9 0.3333 1 h 0.3333 C 0.6667 0.9167 0.7 0.8333 0.7667 0.7667 z'></path>"
      },
      {
        match: [false, true, false, true],
        figure:
          "<path d='M 1 0.6667 V 0.3333 C 0.9167 0.3333 0.8333 0.3 0.7833 0.25 v 0 C 0.7 0.1667 0.6167 0.1333 0.5 0.1333 C 0.3833 0.1333 0.3 0.1667 0.2333 0.25 v 0 C 0.1667 0.3 0.0833 0.3333 0 0.3333 V 0.6667 Z M 0 0.3333 v 0.3333 c 0.0833 0 0.1667 0.0333 0.2167 0.0833 v 0 C 0.3 0.8333 0.3833 0.8667 0.5 0.8667 C 0.6167 0.8667 0.7 0.8333 0.7667 0.75 v 0 C 0.8333 0.7 0.9167 0.6667 1 0.6667 V 0.3333 Z'></path>"
      },
      {
        match: [false, false, true, true],
        figure:
          "<path d='M 0.2333 0.7667 C 0.2333 0.7667 0.2333 0.7667 0.2333 0.7667 C 0.3 0.8333 0.3333 0.9167 0.3333 1 h 0.3333 c 0 -0.0833 0.0333 -0.1667 0.0833 -0.2167 l 0 0 C 0.8333 0.7 0.8667 0.6167 0.8667 0.5 c 0 -0.2 -0.1667 -0.3667 -0.3667 -0.3667 C 0.4 0.1333 0.3167 0.1667 0.25 0.2333 l 0 0 C 0.1833 0.3 0.1 0.3333 0 0.3333 v 0.3333 C 0.0833 0.6667 0.1667 0.7 0.2333 0.7667 z'></path>"
      },

      {
        match: [true, true, true, false],
        figure:
          "<path d='M 0.7667 0.7667 C 0.7667 0.7667 0.7667 0.7667 0.7667 0.7667 c 0.05 -0.05 0.1 -0.0833 0.1667 -0.1 C 0.95 0.6667 0.9833 0.6667 1 0.6667 V 0.3333 C 0.9833 0.3333 0.95 0.3333 0.9333 0.3333 c -0.0667 -0.0167 -0.1167 -0.05 -0.1667 -0.0833 c 0 0 0 0 0 0 C 0.7 0.1667 0.6667 0.0833 0.6667 0 H 0.3333 c 0 0.0833 -0.0333 0.1667 -0.0833 0.2167 c 0 0 0 0 0 0 C 0.1667 0.3 0.1333 0.3833 0.1333 0.5 S 0.1667 0.7 0.25 0.7667 c 0 0 0 0 0 0 C 0.3 0.8333 0.3333 0.9167 0.3333 1 h 0.3333 C 0.6667 0.9167 0.7 0.8333 0.7667 0.7667 z'></path>"
      },
      {
        match: [false, true, true, true],
        figure:
          "<path d='M 0.2333 0.7667 C 0.2333 0.7667 0.2333 0.7667 0.2333 0.7667 c 0.05 0.05 0.0833 0.1 0.1 0.1667 C 0.3333 0.95 0.3333 0.9833 0.3333 1 h 0.3333 c 0 -0.0167 0 -0.05 0 -0.0667 c 0.0167 -0.0667 0.05 -0.1167 0.0833 -0.1667 c 0 0 0 0 0 0 C 0.8333 0.7 0.9167 0.6667 1 0.6667 V 0.3333 C 0.9167 0.3333 0.8333 0.3 0.7833 0.25 c 0 0 0 0 0 0 C 0.7 0.1667 0.6167 0.1333 0.5 0.1333 S 0.3 0.1667 0.2333 0.25 c 0 0 0 0 0 0 C 0.1667 0.3 0.0833 0.3333 0 0.3333 v 0.3333 C 0.0833 0.6667 0.1667 0.7 0.2333 0.7667 z'></path>"
      },
      {
        match: [true, false, true, true],
        figure:
          "<path d='M 0.2333 0.2333 C 0.2333 0.2333 0.2333 0.2333 0.2333 0.2333 C 0.1833 0.2833 0.1333 0.3167 0.0667 0.3333 C 0.05 0.3333 0.0167 0.3333 0 0.3333 v 0.3333 c 0.0167 0 0.05 0 0.0667 0 c 0.0667 0.0167 0.1167 0.05 0.1667 0.0833 c 0 0 0 0 0 0 C 0.3 0.8333 0.3333 0.9167 0.3333 1 h 0.3333 c 0 -0.0833 0.0333 -0.1667 0.0833 -0.2167 c 0 0 0 0 0 0 C 0.8333 0.7 0.8667 0.6167 0.8667 0.5 S 0.8333 0.3 0.75 0.2333 c 0 0 0 0 0 0 C 0.7 0.1667 0.6667 0.0833 0.6667 0 H 0.3333 C 0.3333 0.0833 0.3 0.1667 0.2333 0.2333 z'></path>"
      },
      {
        match: [true, true, false, true],
        figure:
          "<path d='M 0.7667 0.2333 C 0.7667 0.2333 0.7667 0.2333 0.7667 0.2333 C 0.7167 0.1833 0.6833 0.1333 0.6667 0.0667 C 0.6667 0.05 0.6667 0.0167 0.6667 0 H 0.3333 c 0 0.0167 0 0.05 0 0.0667 c -0.0167 0.0667 -0.05 0.1167 -0.0833 0.1667 c 0 0 0 0 0 0 C 0.1667 0.3 0.0833 0.3333 0 0.3333 v 0.3333 c 0.0833 0 0.1667 0.0333 0.2167 0.0833 c 0 0 0 0 0 0 C 0.3 0.8333 0.3833 0.8667 0.5 0.8667 S 0.7 0.8333 0.7667 0.75 c 0 0 0 0 0 0 C 0.8333 0.7 0.9167 0.6667 1 0.6667 V 0.3333 C 0.9167 0.3333 0.8333 0.3 0.7667 0.2333 z'></path>"
      }
    ]
  },
  inner: {
    square: [
      {
        match: [false, false, false, false],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      }
    ],
    dot: [
      {
        match: [false, false, false, false],
        figure: "<circle cx='0.5' cy='0.5' r='0.5'/>"
      }
    ],
    rounded: [
      {
        match: [true, false, true, false],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },
      {
        match: [false, true, false, true],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },

      {
        match: [true, true, false, false],
        figure:
          "<path d='M 1 1 H 0.5 C 0.2167 1 0 0.7833 0 0.5 V 0 l 1 0 V 1 z'></path>"
      },
      {
        match: [true, false, false, true],
        figure:
          "<path d='M 0.5 1 H 0 V 0 l 1 0 v 0.5 C 1 0.7833 0.7833 1 0.5 1 z'></path>"
      },

      {
        match: [false, true, true, false],
        figure:
          "<path d='M 1 1 H 0 V 0.5 c 0 -0.2833 0.2167 -0.5 0.5 -0.5 l 0.5 0 V 1 z'></path>"
      },
      {
        match: [false, false, true, true],
        figure:
          "<path d='M 1 1 H 0 V 0 l 0.5 0 c 0.2833 0 0.5 0.2167 0.5 0.5 V 1 z'></path>"
      }
    ],
    circle: [
      {
        match: [true, true, true, true],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },
      {
        match: [false, true, false, true],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },

      {
        match: [true, true, false, false],
        figure: "<path d='M 0 0 H 1 V 1 c -0.5 0 -1 -0.5 -1 -1 z'></path>"
      },
      {
        match: [true, false, false, true],
        figure: "<path d='M 0 0 H 0 V 1 c 0.5 0 1 -0.5 1 -1 z'></path>"
      },

      {
        match: [false, true, true, false],
        figure: "<path d='M 1 1 H 0 V 1 c 0 -0.5 0.5 -1 1 -1 z'></path>"
      },
      {
        match: [false, false, true, true],
        figure: "<path d='M 0 1 H 1 V 1 c 0 -0.5 -0.5 -1 -1 -1 z'></path>"
      }
    ],
    kite: [
      {
        match: [true, false, true, false],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },
      {
        match: [false, true, false, true],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },

      {
        match: [true, true, false, false],
        figure:
          "<path d='M 1 1 H 0.5 C 0.2167 1 0 0.7833 0 0.5 V 0 l 1 0 V 1 z'></path>"
      },
      {
        match: [true, false, false, true],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },

      {
        match: [false, true, true, false],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },
      {
        match: [false, false, true, true],
        figure:
          "<path d='M 1 1 H 0 V 0 l 0.5 0 c 0.2833 0 0.5 0.2167 0.5 0.5 V 1 z'></path>"
      }
    ]
  },
  outer: {
    square: [
      {
        match: [false, false, false, false],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      }
    ],
    dot: [
      {
        match: [false, false, false, false],
        figure: "<circle cx='0.5' cy='0.5' r='0.5'/>"
      }
    ],
    rounded: [
      {
        match: [true, false, true, false],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },
      {
        match: [false, true, false, true],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },

      {
        match: [true, true, false, false],
        figure:
          "<path d='M 1 1 H 0.5 C 0.2167 1 0 0.7833 0 0.5 V 0 l 1 0 V 1 z'></path>"
      },
      {
        match: [true, false, false, true],
        figure:
          "<path d='M 0.5 1 H 0 V 0 l 1 0 v 0.5 C 1 0.7833 0.7833 1 0.5 1 z'></path>"
      },

      {
        match: [false, true, true, false],
        figure:
          "<path d='M 1 1 H 0 V 0.5 c 0 -0.2833 0.2167 -0.5 0.5 -0.5 l 0.5 0 V 1 z'></path>"
      },
      {
        match: [false, false, true, true],
        figure:
          "<path d='M 1 1 H 0 V 0 l 0.5 0 c 0.2833 0 0.5 0.2167 0.5 0.5 V 1 z'></path>"
      }
    ],
    kite: [
      {
        match: [true, false, true, false],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },
      {
        match: [false, true, false, true],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },

      {
        match: [true, true, false, false],
        figure:
          "<path d='M 1 1 H 0.5 C 0.2167 1 0 0.7833 0 0.5 V 0 l 1 0 V 1 z'></path>"
      },
      {
        match: [true, false, false, true],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },

      {
        match: [false, true, true, false],
        figure: "<path d='M 0,0 H 1 V 1 H 0 Z'></path>"
      },
      {
        match: [false, false, true, true],
        figure:
          "<path d='M 1 1 H 0 V 0 l 0.5 0 c 0.2833 0 0.5 0.2167 0.5 0.5 V 1 z'></path>"
      }
    ]
  }
};
