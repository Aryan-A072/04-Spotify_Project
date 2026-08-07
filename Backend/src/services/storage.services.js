const { ImageKit } = require("@imagekit/nodejs")

const ImageKitClient = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    timeout: 60 * 1000
})

async function uploadFile(file){
    try {
        const result = await ImageKitClient.files.upload(
            {
                file,
                fileName:"music_" + Date.now(), 
                folder:"spotifyProject/music",
            },
            {
                timeout: 60 * 1000
            }
        );

        console.log("Upload Success:", result.url);
        return result;

    } catch (err) {
        console.error("ImageKit Upload Error:", err);
    }
    
    return result;
}

module.exports = { uploadFile }