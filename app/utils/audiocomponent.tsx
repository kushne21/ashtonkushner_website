"use client";
import Image from 'next/image';
import {useEffect,useState, useRef} from 'react';


export default function MiscAudio() {
    const [audio, setAudio] = useState<HTMLAudioElement |(null)>(null);

    useEffect(() => {

    setAudio(new Audio("/gary_meow.mp3")) ;// only call client

    }, []);
    const playMeow = () => {
       if(audio) audio?.play();
       
    }

    // const musicPlayers = useRef<HTMLAudioElement | null>(
    //     typeof Audio !== null ? new Audio("/gary_meow.mp3") : undefined
    //     );
    // const playMeow = () => {
    //    musicPlayers.current?.play();
    //  }
    return (
        <button onClick={playMeow}> <Image
                    src="/misc.svg" 
                    alt="my icon"
                    width={80}
                    height={80}></Image></button>
    )
}