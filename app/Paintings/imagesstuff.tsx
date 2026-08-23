
import getCloudinary from '../utils/cloudinaryfetch';
import CldImage from "../utils/cldimage";

const cloudinary = getCloudinary();
// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
//works
type CldImage = {

  public_id: string;

  secure_url: string;

  width: number;

  height: number;

};
interface imagesProps {
  folder: string,
  tags: string,
}
export default async function Images(props : imagesProps) {
    let folderStr = props.folder;
    let tagsStr = props.tags;
    let newStr : string = "folder=";
    let newestStr : string = newStr.concat(folderStr," AND tags=",tagsStr)
    const { resources } = await cloudinary.search.expression(newestStr).execute();
    return (
        
             <ul className="ul">

          {resources.map((image: CldImage) => (
            
                <li key={image.public_id} className="">
                    <a href="/">
                <CldImage

                    alt={image.public_id}

                    src={image.secure_url}

                    width={150}

                    height={150}
                    style={{ width: 'auto', height: '100%', objectFit: 'cover', borderRadius: '14px'}}

                /></a>

                </li>
            
            

          ))}</ul>
        
        
        
    );
}