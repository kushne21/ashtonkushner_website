import cloudinaryLib  from "cloudinary";
const cloudinary = cloudinaryLib.v2
//seems to work
export default function getCloudinary() {
    cloudinary.config({

    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,

    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,

    api_secret: process.env.CLOUDINARY_API_SECRET,

  });

  return cloudinary;

}