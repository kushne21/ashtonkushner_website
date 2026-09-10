import Images from "../Paintings/imagesstuff"
import type imagesProps from "../Paintings/imagesstuff"



export default function Imagesfull() {
  return (
     <>
     <div className="text-xl text-center font-sans dark:bg-black ">
        <div className="bg-[#e1f5ea] pt-2 pb-4" id="PaintingsArt">
            <h1 className="text-2xl">Paintings</h1>
            {/* <Images folder="Paintings" tags="2026"></Images> */}
      
      
            {/* <Images folder="Paintings" tags="2025"></Images>
            
            
            <Images folder="Paintings" tags="2024"></Images> */}
        </div>
        <div className="bg-[#f5e1f0] pt-2 pb-4" id="DigitalArt">
            <h1 className="text-2xl">Digital Art / Illustrations</h1>
            {/* <Images folder="digitals" tags="2026"></Images>
      
            <Images folder="digitals" tags="2025"></Images>
            
            <Images folder="digitals" tags="2024"></Images>  */}
        </div>
      

     </div>
     
    </>
   
    
   ); 

}