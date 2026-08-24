import Image from "next/image"


export default function Home() {
  return (
    <div>good morning
      <div className="grid grid-cols-2 ">
        <div className="relative col-start-1 text-center">
          <h1 className="text-3xl m-1"> Hello! </h1>
          <h2  className="text-4xl"> I'm <span className="text-[#4a1d97]">Ashton Kushner!</span></h2>
          <h3  className="text-3xl m-1">Developer, Artist</h3>
          <h4  className="text-2xl">Have Fun!</h4>
        </div>
        <div>
          <div className="flex bg-[#e1f5ea] flex-col">
            2
          </div>
          <div className="flex bg-[#f5e1f0] flex-col">
            3

          </div>
        </div>
        

      </div>


    </div>
    
    
  );
}

