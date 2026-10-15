import Navbar from '../utils/navbar';
import Image, {ImageProps} from 'next/image';

export default function Home() {
    return (
    <>
    <Navbar exists={true}></Navbar>
    <div className="pt-15 pl-2 pr-2">
        <h1 className="text-center text-3xl pb-3">Coding Projects</h1>
        <hr></hr>
        <div className="flex flex-col pb-5 justify-center">
        

        <Project imagething={<Image 
            src="/proj1.png"
              alt="Picture of website"
              width={200}
              height={200}
              style={{borderRadius:"30%"}}>
            </Image>} linkthing="./" tools="CNext.JS, React, Typescript, TailwindCSS, Cloudinary CDN." title="This portfolio website!">
            <p> A mix of an image portfolio, coding portfolio, and link tree. Using this as more of playful project. I'll be adding some other stuff like a blog soon!
                </p>
                
            </Project>

        

        <Project imagething={<Image className="h-40 w-auto"
            src="/proj2.png"
              alt="Picture of boxing machine"
              width={200}
              height={200}
              style={{borderRadius:"30%"}}>
            </Image>} linkthing="https://youtube.com/shorts/pOPui0hwFBY" tools="C, Arduino UNO, TouchDesigner, a punching bag, a projecter, MadMapper." title="AI-Based Arduino Boxing Machine">
            <p> It used an impact sensor to determine the users score when punched, and displayed only images
                    of AI generated creatures laughing in real-time.
                </p>
                
            </Project>


        <Project imagething={<Image className="h-40 w-auto"
            src="/proj3.png"
              alt="Picture of elug"
              width={200}
              height={200}
              style={{borderRadius:"30%"}}>
            </Image>} linkthing="https://capstone.cse.msu.edu/2025-08/projects/henry-ford-innovations-elug/" tools="PHP, Javascript, HTML/CSS, MS-SQL." title="eLUG for Henry Ford Health">
            <p> Team project for my capstone for Henry Ford Health at Michigan State University. Redesigned their electronic laboratory users guide website.
                </p>
                <p>
                    Helped design some APIs, security functionality, and various front end things.
                </p>
            </Project>
        

        <Project imagething={<Image className="h-40 w-auto"
            src="/proj4.jpg"
              alt="Picture of burber"
              width={200}
              height={200}
              style={{borderRadius:"30%"}}>
            </Image>} linkthing="." tools="Python, Discord API." title="Burber Discord Bot">
            <p> Private Discord bot for usage within personal servers. Some usages are: setting up an automatic Secret Santa game assigner, call and response messages.
                </p>
                <p>
                    Currently no link because it is private.
                </p>
            </Project>

        
        <Project imagething={<Image className="h-40 w-auto"
            src="/proj5.png"
              alt="Picture of Shum"
              width={200}
              height={200}
              style={{borderRadius:"30%"}}>
            </Image>} linkthing="https://www.churchofshum.org" tools="TypeScript, Next.JS, ReactJS, Java, PostgresQL" title="Church of Shum">
            <p> Fictional church website and blog for a silly character. Will feature the ability to sign in, authorization, and other things. Still in progress.
                </p>
                <p>
                    NOTE: WIP!!!!! NOT FINISHED
                </p>
            </Project>


        <Project imagething={<Image className="h-40 w-auto"
            src="/proj5.png"
              alt="Picture of Shum"
              width={200}
              height={200}
              style={{borderRadius:"30%"}}>
            </Image>} linkthing="." tools="Raspberry PI, Python, Kivy, 3D Printer" title="Shum FAQ Raspberry PI">
            <p> FAQ for an art exhibition.
                </p>
                <p>
                    Will be used embedded style.
                </p>
            </Project>
        
    </div>
    </div>
    </>
    );
}

type ProjectProps = {
    children: React.ReactNode;
    linkthing?: string;
    tools: string;
    title: string;

    imagething: React.ReactNode;
}

export function Project({children, imagething, linkthing, tools, title}: ProjectProps) {
    return (
        <div className="pb-5 pt-2">
        <div id="proj1" className="flex flex-row   items-center gap-x-15 pb-5">
            
                <div className='flex w-1/2 justify-center'>
               {imagething} </div>

            
            <div className="text-center w-full">
                <a href={linkthing}><h1 className="text-center font-semibold text-xl pb-2 transition-colors duration-200 hover:text-blue-600">{title}</h1></a>
                <p className="text-xs pb-2"> {tools}</p>
               {children}
                
            </div>
        
        </div>
        <hr></hr>
        </div>
    );
}