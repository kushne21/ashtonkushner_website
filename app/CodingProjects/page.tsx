import Navbar from '../utils/navbar';
import Image from 'next/image';

export default function Home() {
    return (
    <>
    <Navbar exists={true}></Navbar>
    <div className="pt-15 pl-2 pr-2">
        <h1 className="text-center text-3xl pb-3">Coding Projects</h1>
        <div className="flex flex-col pb-5 justify-center">
        <hr className="pt-2 pb-5"></hr>
        
        <div  className="flex flex-row  items-center gap-x-15 pb-2">
            <div className='flex w-1/2 justify-center'>
            <Image 
            src="/proj1.png"
              alt="Picture of website"
              width={200}
              height={200}
              style={{borderRadius:"30%"}}>
            </Image>
            </div>
                

            
            <div className="text-center pb-5">
                <a href="./"><h1 className="font-semibold text-center text-xl pb-2 transition-colors duration-200 hover:text-blue-600">This portfolio website!</h1></a>
                <p className="text-xs pb-2">Next.JS, React, Typescript, TailwindCSS, Cloudinary CDN.
                </p>
                
                <p>
                    A mix of an image portfolio, coding portfolio, and link tree. Using this as more of playful project. I'll be adding some other stuff like a blog soon!
                </p>
            </div>
            
        
        
        </div>
        <hr></hr>
        </div>

        <div className="pb-5">
        <div className="flex flex-row items-center gap-x-15 pb-5">
            <div className='flex w-1/2 justify-center'>
                <Image className="h-40 w-auto"
            src="/proj2.png"
              alt="Picture of boxing machine"
              width={200}
              height={200}
              style={{borderRadius:"30%"}}>
            </Image>
            </div>
                
      
            <div className="text-center">
                <a href="https://youtube.com/shorts/pOPui0hwFBY"><h1 className="text-center font-semibold text-xl pb-2 transition-colors duration-200 hover:text-blue-600">AI-Based Arduino Boxing Machine</h1></a>
                <p className="text-xs pb-2">C, Arduino UNO, TouchDesigner, a punching bag, a projecter, MadMapper.
                </p>
                
                <p> It used an impact sensor to determine the users score when punched, and displayed only images
                    of AI generated creatures laughing in real-time.
                </p>
            </div>
        </div>
        <hr></hr>
        </div>



        <div className="pb-5">
        <div id="proj1" className="flex flex-row  items-center gap-x-15 pb-5">
            <div className='flex w-1/2 justify-center'>
            <Image className="h-40 w-auto"
            src="/proj3.png"
              alt="Picture of elug"
              width={200}
              height={200}
              style={{borderRadius:"30%"}}>
            </Image></div>
                

            
            <div className="text-center">
                <a href="https://capstone.cse.msu.edu/2025-08/projects/henry-ford-innovations-elug/"><h1 className="text-center font-semibold text-xl pb-2 transition-colors duration-200 hover:text-blue-600">eLUG for Henry Ford Health</h1></a>
                <p className="text-xs pb-2">PHP, Javascript, HTML/CSS, MS-SQL.
                </p>
                <p> Team project for my capstone for Henry Ford Health at Michigan State University. Redesigned their electronic laboratory users guide website.
                </p>
                <p>
                    Helped design some APIs, security functionality, and various front end things.
                </p>
            </div>
        

        </div>
        <hr></hr>
        </div>

        <div className="pb-5">
        <div id="proj1" className="flex flex-row  items-center gap-x-15 pb-5">
            <div className='flex w-1/2 justify-center'>
            <Image className="h-40 w-auto"
            src="/proj4.jpg"
              alt="Picture of burber"
              width={200}
              height={200}
              style={{borderRadius:"30%"}}>
            </Image>
            </div>
                

            
            <div className="text-center">
                <h1 className="text-center font-semibold text-xl pb-2 transition-colors duration-200 hover:text-blue-600">Burber Discord Bot</h1>
                <p className="text-xs pb-2">Python, Discord API.
                </p>
                <p> Private Discord bot for usage within personal servers. Some usages are: setting up an automatic Secret Santa game assigner, call and response messages.
                </p>
                <p>
                    Currently no link because it is private.
                </p>
                
            </div>
        
        </div>
        <hr></hr>

        <div className="pb-5">
        <div id="proj1" className="flex flex-row   items-center gap-x-15 pb-5">
            
                <div className='flex w-1/2 justify-center'>
               <Image className="h-40 w-auto"
            src="/proj5.png"
              alt="Picture of Shum"
              width={200}
              height={200}
              style={{borderRadius:"30%"}}>
            </Image> </div>

            
            <div className="text-center">
                <a href="https://www.churchofshum.org"><h1 className="text-center font-semibold text-xl pb-2 transition-colors duration-200 hover:text-blue-600">Church of Shum</h1></a>
                <p className="text-xs pb-2"> TypeScript, Next.JS, ReactJS, Java, PostgresQL
                </p>
                <p> Fictional church website and blog for a silly character. Will feature the ability to sign in, authorization, and other things. Still in progress.
                </p>
                <p>
                    NOTE: WIP!!!!! NOT FINISHED
                </p>
                
            </div>
        
        </div>
        <hr></hr>
        </div>
        </div>
    </div>
    </>
    );
}