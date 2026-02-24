import sharp from 'sharp';

async function processImage(input, output) {
    try {
        const info = await sharp(input)
            .trim({ threshold: 50 })
            .toFile(output);
        console.log(`Success ${output}:`, info);
    } catch (err) {
        console.error(`Error processing ${input}:`, err);
    }
}

async function run() {
    await processImage('public/logo-full.png', 'public/logo-full-cropped2.png');
    await processImage('public/logo-icon.png', 'public/logo-icon-cropped2.png');
}

run();
