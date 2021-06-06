const jimp = require('jimp');
const fs = require('fs');

if(fs.existsSync('./fonts')) {
    fs.rmSync('./fonts', {recursive: true});
}

fs.mkdirSync('./fonts');

const SPRITE_HEIGHT = 6;
const SPRITE_WIDTH = 8;

let defFile = {
    "providers": [
        
    ]
}

const genDefEntry = (index) => {
    return {
        "type": "bitmap",
        "file": `the_spire:fonts/${index}_${SPRITE_WIDTH}.png`,
        "ascent": SPRITE_HEIGHT,
        "chars": [
            String.fromCharCode(0xE000 + index)
        ]
    }
}

console.log(0xFFFFFFFF);
console.log((0xFFFFFF00 | 0xFF) >>> 0);

for(let i = 0; i <= 8; i++) {
    let img = new jimp(SPRITE_WIDTH, SPRITE_HEIGHT, (err, imgD) => {
        if(err) throw err;

        for(let x = 0; x < SPRITE_WIDTH; x++) {
            for(let y = 0; y < SPRITE_HEIGHT; y++) {
                imgD.setPixelColour((x < i ? 0xFFFFFFFF : 0x44444444) >>> 0, x, y);
            }
        }

        

        imgD.write(`./fonts/${i}_${SPRITE_WIDTH}.png`);
    });
    defFile.providers.push(genDefEntry(i));
}

fs.writeFileSync(`./fonts/default.json`, JSON.stringify(defFile, null, 4));