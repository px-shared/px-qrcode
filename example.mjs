import QRCode from './lib/index.js';

const generateQR = async (text) => {
  try {
    const svg = await QRCode.toFile('example.svg', text, {
      errorCorrectionLevel: 'H',
      type: 'svg',
      margin: 2,
      format: {
        background: 'white',
        data: { shape: 'diamond', gradient: ['#d2045644', '#c60865ff'] },
        inner: { shape: 'kite', gradient: ['#d2045644', '#7820c5ff'] },
        outer: { shape: 'kite', gradient: ['#d2045644', '#7820c5ff'] },
        image: 'https://pngimg.com/uploads/wikipedia/wikipedia_PNG35.png'
      }
    });
  } catch (err) {
    console.error(err);
  }
};

generateQR('Example');
