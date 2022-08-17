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
          gradient: ['red', 'red']
        },
        inner: {
          shape: 'dot',
          gradient: ['red', 'red']
        },
        outer: {
          shape: 'dot',
          gradient: ['red', 'red']
        }
      }
    });
  } catch (err) {
    console.error(err);
  }
};

generateQR('Preview code');
