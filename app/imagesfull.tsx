import Images from "./Paintings/imagesstuff"
import type imagesProps from "./Paintings/imagesstuff"



export default function Imagesfull() {
  return (
     <>
     <div className="text-xl text-center font-sans dark:bg-black ">
        <div className="bg-[#e1f5ea]" id="PaintingsArt">
            <Images folder="Paintings" tags="2026"></Images>
      
      
            <Images folder="Paintings" tags="2025"></Images>
            
            
            <Images folder="Paintings" tags="2024"></Images>
        </div>
        <div className="bg-[#f5e1f0]" id="DigitalArt">
            <Images folder="digitals" tags="2026"></Images>
      
            <Images folder="digitals" tags="2025"></Images>
            
            <Images folder="digitals" tags="2024"></Images> 
        </div>
      

     </div>
     
    </>
   
    
   ); 

}