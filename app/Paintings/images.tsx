import React from 'react'
import Image from "next/image";

export default function Images() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black ">
      hello
      <div className="flex p-10 [&_img]:border-radius-[50px]"> {/* padding is vertical here, around the whole div container*/}
        <Image
        src="/newPaintingsCompressed/Aesthetic_Sludge_2025.webp"
        alt="Aesthetic Sludge / 2025."
        height={200}
        width={180}
        //style={{display: "inline-block",
        //  borderRadius: "50px",
        //}}
      />
      <Image
      src="/newPaintingsCompressed/AGIs_Roman_Empire_2025.webp"
      alt="Roman Empire / 2025."
      width={150}
      height={100}
      />
      <Image
      src="/newPaintingsCompressed/American_Christmas_Album_2025_12x12.webp"
      alt="American Christmas Album / 2025."
      width={150}
      height={100}
      />
      <Image
      src="/newPaintingsCompressed/ANISH_COMMISSION_2024.webp"
      alt="ANISH COMMISSION / 2024."
      width={150}
      height={100}
      />
      <Image
      src="/newPaintingsCompressed/Bug_In_Car_2026_31x24.webp"
      alt="Bug In Car / 2026."
      width={150}
      height={100}
      />
      <Image
      src="/newPaintingsCompressed/Butterflies_2024.webp"
      alt="Butterflies / 2024."
      width={150}
      height={100}
      />
      </div>

      <div className="flex">

        <Image
        src="/newPaintingsCompressed/Corporate_Ghouls_2025_46x46.webp"
        alt="Corporate Ghouls / 2025."
        height={200}
        width={180}
      />
      <Image
      src="/newPaintingsCompressed/Excel_2025_12x12.webp"
      alt="Excel / 2025."
      width={150}
      height={100}
      />
      <Image
      src="/newPaintingsCompressed/Finest_Nation_In_America_2025.webp"
      alt="Finest Nation In America / 2025."
      width={150}
      height={100}
      />
      <Image
      src="/newPaintingsCompressed/Float_2026_44x52.webp"
      alt="Float / 2026."
      width={150}
      height={100}
      />
      <Image
      src="/newPaintingsCompressed/Granny's_Christmas_Miracle_2025_54x42.webp"
      alt="Granny's Christmas Miracle / 2025."
      width={150}
      height={100}
      />
      <Image
      src="/newPaintingsCompressed/Kushner_Ashton_American Business Boy_30x24.webp"
      alt="American Business Boy / 2024."
      width={150}
      height={150}
      />

      </div>
      
    </div>
  
  );
}
