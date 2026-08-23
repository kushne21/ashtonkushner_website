
import getCloudinary from '../utils/cloudinaryfetch';
import CldImage from "../utils/cldimage";

const cloudinary = getCloudinary();
// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
//works
export default async function Modal() {
    const { resources } = await cloudinary.search.expression("folder=cities AND tags=tokyo").execute();
    return (
        <a href="/">

        
        <CldImage
        src="Bug_In_Car_2026_31x24" // Use this sample image or upload your own via the Media Library
        alt="gomba"
        width="150" // Transform the image: auto-crop to square aspect_ratio
        height="150"
        crop={{
            type: 'auto',
            source: true
        }}/>
        </a>
        
    );
}