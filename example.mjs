import QRCode from './lib/index.js';

const generateQR = async (text) => {
  try {
    const svg = await QRCode.toFile('example.svg', text, {
      errorCorrectionLevel: 'H',
      type: 'svg',
      margin: 2,
      format: {
        background: 'white',
        data: {
          shape: 'square',
          gradient: ['#000', '#000'],
          opacity: ['1', '0.5']
        },
        inner: { shape: 'square', gradient: ['#00000099', '#000'] },
        outer: { shape: 'square', gradient: ['#000', '#000'] },
        image: ''
      }
    });
  } catch (err) {
    console.error(err);
  }
};

generateQR('Example');
