import QRCode from './lib/index.js';

const generateQR = async (text) => {
  try {
    const svg = await QRCode.toFile('example.svg', text, {
      errorCorrectionLevel: 'H',
      type: 'svg',
      margin: 4,
      format: {
        background: 'white',
        image: 'https://pngimg.com/uploads/fanta/fanta_PNG57.png',
        data: {
          shape: 'hex',
          gradient: ['orange', 'yellow']
        },
        inner: {
          shape: 'kite',
          gradient: ['orange', 'yellow']
        },
        outer: {
          shape: 'kite',
          gradient: ['orange', 'yellow']
        }
      }
    });
  } catch (err) {
    console.error(err);
  }
};

generateQR('he');
