import { getPlaiceholder} from "plaiceholder"

async function getBase64(imageUrl) {
    try {
        const image = await fetch(imageUrl);

        if (!image.ok) {
            throw new Error(`Failed to fetch imageUrl: ${imageUrl}`);
        }

        const buffer = await image.arrayBuffer();

        const {base64} = await getPlaiceholder(Buffer.from(buffer));

        return base64;
    }

    catch (error) {
        if (error instanceof Error) console.log(error.stack);
    }
}

export default getBase64;