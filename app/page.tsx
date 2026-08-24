import Image from 'next/image';
import Imagesfull from './imagesfull';
import MiscAudio from './utils/audiocomponent';




export default function Home() {
  
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center gap-x-15 pt-15">
        <div className="relative col-start-1 text-center">
          <h1 className="text-3xl m-1"> Hello! </h1>
          <h2  className="text-4xl"> I'm <span className="text-[#4a1d97]">Ashton Kushner!</span></h2>
          <h3  className="text-3xl m-1">Developer, Artist</h3>
          <h4  className="text-2xl">Have Fun!</h4>
          <div className="flex justify-center m-5 ">
             <Image 
              src="/AshtonHeadshot.png"
              alt="Picture of Ashton"
              width={200}
              height={200}
              style={{borderRadius: '30%'}}
            ></Image>
          </div>
         
        </div>
        <div className="m-15">
          <div className="flex bg-[#f5e1f0] flex-row gap-x-1 justify-center rounded-2xl m-5 p-5">
            <a href="https://github.com/kushne21"> <Image
            src="/github.svg" 
            alt="my icon"
            width={80}
            height={80}
            ></Image></a>
            <a href="https://www.linkedin.com/in/ashton-kushner-9b52b32a6/"> <Image
            src="/linkedin.svg" 
            alt="my icon"
            width={80}
            height={80}></Image></a>
            <a href="mailto:kushne21@msu.edu"> <Image
            src="/contact.svg" 
            alt="my icon"
            width={80}
            height={80}></Image></a>
          </div>
          <div className="flex bg-[#e1f5ea] flex-row gap-x-1 justify-center rounded-2xl m-5 p-5">
            <a href=""> <Image
            src="/painting.svg" 
            alt="my icon"
            width={80}
            height={80}></Image></a>
            <a href=""> <Image
            src="/illustration.svg" 
            alt="my icon"
            width={80}
            height={80}></Image></a>
            <MiscAudio></MiscAudio>
            {/* <a href=""> <Image
            src="/misc.svg" 
            alt="my icon"
            width={80}
            height={80}></Image></a> */}

          </div>
        </div>
        

      </div>
      
      <Imagesfull></Imagesfull>


    </div>
    
    
  );
}

