import Navbar from '../utils/navbar';
import Image from 'next/image';

export default function Home() {
    return (
    <>
    <Navbar exists={true}></Navbar>
    <div className="pt-15 pl-2 pr-2">
        <h1 className="text-center text-3xl pb-3">Coding Projects</h1>
        <div className="pb-5">
        <hr className="pt-2 pb-5"></hr>
        
        <div id="proj1" className="flex flex-row  justify-center items-center gap-x-15">
            
                <Image 
            src="/proj1.png"
              alt="Picture of website"
              width={200}
              height={200}
              style={{borderRadius:"30%"}}>
            </Image>

            
            <div className="text-center pb-5">
                <a href="./"><h1 className="font-semibold text-center text-xl pb-2 transition-colors duration-200 hover:text-blue-600">This portfolio website!</h1></a>
                <p>This website was made using Next.JS with React, Typescript, and TailwindCSS. I used an
                    API for Cloudinary CDN to host the images so they'd appear quicker.
                </p>
            </div>
            
        
        
        </div>
        <hr></hr>
        </div>

        <div className="pb-5">

        
            
        <div id="proj1" className="flex flex-row  justify-center items-center gap-x-15">
            
                <Image 
            src="/proj2.png"
              alt="Picture of boxing machine"
              width={200}
              height={200}
              style={{borderRadius:"30%"}}>
            </Image>

            
            <div className="text-center">
                <a href="https://youtube.com/shorts/pOPui0hwFBY"><h1 className="text-center font-semibold text-xl pb-2 transition-colors duration-200 hover:text-blue-600">AI-Based Arduino Boxing Machine</h1></a>
                <p>This project was made using an Arduino UNO, TouchDesigner, a punching bag, a projecter, and MadMapper.
                </p>
                <p> It used an impact sensor to determine the users score when punched, and displayed only images
                    of AI generated creatures laughing in real-time.
                </p>
            </div>
        

        </div>
        </div>
    </div>
    </>
    );
}