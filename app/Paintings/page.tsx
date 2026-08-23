import Images from "./imagesstuff"
import type imagesProps from "./imagesstuff"



export default function Paintings() {
  return (
     <>
     <div className="text-xl text-center font-sans dark:bg-black  bg-[#e1f5ea]">
        <div className=""> 
                <h1 className="m-10">
                        2026
                </h1>
     <Images folder="Paintings" tags="2026"></Images>
     </div>
     <div className=""> 
                <h1 className="m-10">
                        2025
                </h1>
     <Images folder="Paintings" tags="2025"></Images>
     </div>
     <div className=""> 
                <h1 className="m-10">
                        2024
                </h1>
     <Images folder="Paintings" tags="2024"></Images>
     </div>
     
     </div>
     <div className="text-xl text-center font-sans dark:bg-black  bg-[#f4e6ef]">
        <div className=""> 
                <h1 className="m-10">
                        2026
                </h1>
     <Images folder="digitals" tags="2026"></Images>
     </div>
     <div className=""> 
                <h1 className="m-10">
                        2025
                </h1>
     <Images folder="digitals" tags="2025"></Images>
     </div>
     <div className=""> 
                <h1 className="m-10">
                        2024
                </h1>
     <Images folder="digitals" tags="2024"></Images>
     </div>
     
     </div>
     
    </>
   
    
   ); 

}