import QRCode from './lib/index.js';

const generateQR = async (text) => {
  try {
    const svg = await QRCode.toFile('example.svg', text, {
      errorCorrectionLevel: 'H',
      type: 'svg',
      margin: 2,
      format: {
        background: 'white',
        data: { shape: 'square', gradient: ['#000', '#000'] },
        inner: { shape: 'square', gradient: ['#000', '#000'] },
        outer: { shape: 'square', gradient: ['#000', '#000'] },
        image:
          'https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/logos/scan-me-square.svg'
      }
    });
  } catch (err) {
    console.error(err);
  }
};

generateQR('Example');
