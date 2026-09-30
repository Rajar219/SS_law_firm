const Jimp = require('jimp');

Jimp.read('public/logo.png')
  .then(image => {
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // The logo has a black background. We want to make any pixel that is very dark and has no color transparent.
      // But wait, the logo is gold (rgb ~200, 160, 40).
      // So if a pixel is very dark (r < 50, g < 50, b < 50), we make it transparent.
      // But anti-aliasing pixels will be dark gold/brown.
      // If we just make it transparent based on lightness, we might get fringing.
      // A better way is to treat the pixel's lightness as its alpha channel if it's black/gold.
      // But let's just use a simple threshold for now. The user's image is a solid black background.
      
      // Let's use a threshold of 30.
      if (red < 30 && green < 30 && blue < 30) {
        this.bitmap.data[idx + 3] = 0; // set alpha to 0
      } else if (red < 80 && green < 80 && blue < 80) {
        // partial transparency for anti-aliasing edges
        // calculate lightness
        const max = Math.max(red, green, blue);
        const alpha = Math.floor((max / 80) * 255);
        this.bitmap.data[idx + 3] = alpha;
      }
    });
    
    return image.writeAsync('public/logo_transparent.png');
  })
  .then(() => {
    console.log('Background removed successfully.');
  })
  .catch(err => {
    console.error('Error:', err);
  });
