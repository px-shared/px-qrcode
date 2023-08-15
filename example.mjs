import QRCode from './lib/index.js';

const generateQR = async (text) => {
  try {
    const svg = await QRCode.toFile('example.svg', text, {
      errorCorrectionLevel: 'H',
      type: 'svg',
      image: '',
      margin: 2,
      format: {
        background: 'white',
        data: {
          shape: 'square',
          gradient: {
            start: {
              color: '#3e23bfff'
            },
            end: {
              color: '#ffffff'
            }
          }
        },
        inner: {
          shape: 'square',
          gradient: {
            start: {
              color: 'black',
              opacity: '1',
              x: '0%',
              y: '0%'
            },
            end: {
              color: 'black',
              opacity: '1',
              x: '100%',
              y: '100%'
            }
          }
        },
        outer: {
          shape: 'square',
          gradient: {
            start: {
              color: 'black',
              opacity: '1',
              x: '0%',
              y: '0%'
            },
            end: {
              color: 'black',
              opacity: '1',
              x: '100%',
              y: '100%'
            }
          }
        }
      }
    });
  } catch (err) {
    console.error(err);
  }
};

generateQR('Example');
