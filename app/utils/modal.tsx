'use client'
import {useState} from 'react';

export default function Modal({
  children
}: Readonly<{
  children: React.ReactNode;
}> ) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div >
        
        {/* {isOpen ? <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center h-screen bg-white pd-50px z-1000"> 
           Hello, I'm Ashton Kushner. I'm a developer and artist! I've developed projects in coding languages
            and frameworks in Python, Typescript, C++, ReactJS, and SQL. I also have made several oil paintings,
            some that have been exhibited and some that have been commissioned. I've also been illustrating for several
            years, experimenting all the time. I love playing around with color, character design, tools, and creating
            nuance with strange themes.

            I have a bachelor's degree in Computer Science and another in Studio Art from Michigan State University.
            If you wish to contact me, use the mail icon on my home page to email me.
        </button>
         : 
        <button onClick={() => setIsOpen(!isOpen)} className="font-bold"> {children}</button>} */}
        <a href="#">
          <button onClick={() => setIsOpen(!isOpen)} className="fixed flex items-center justify-center h-screen bg-black/80 pd-50px z-1000"> 
           <div className="bg-white p-10 w-1/2 items-center rounded-xl">
            <p>Hello, I'm Ashton Kushner. I'm a developer and artist! I've developed projects in coding languages
            and frameworks in Python, Typescript, C++, ReactJS, and SQL.
              </p> 
              <br></br>
              <p>I also have made several oil paintings,
            some that have been exhibited and some that have been commissioned. I've also been illustrating for several
            years, experimenting all the time. I love playing around with color, character design, tools, and creating
            nuance with strange themes.
                </p>
            <br></br>
            <p>I have a bachelor's degree in Computer Science and another in Studio Art from Michigan State University.
            If you wish to contact me, use the mail icon on my home page to email me.</p>
           </div>
           
            </button>
        </a>
        
        </div>
    )
    
}