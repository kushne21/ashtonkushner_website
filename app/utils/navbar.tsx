"use client";
import React, { useState, useEffect } from 'react';

interface MyComponentProps {
  exists: boolean;
}
export default function Navbar({exists}: MyComponentProps){
    const [isThere, setThere] = useState(exists);
    useEffect(() => {
    const handleScroll = () => {
      // Check if scroll position is greater than or equal to window height (100vh)
      if (window.scrollY >= window.innerHeight || exists) {
        setThere(true);
        
      } else {
        setThere(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    if (isThere){
        return (<div className="fixed bg-blue-200 
         w-screen pt-2 pb-2 pl-2 pr-5 items-center z-1000 transition-transform duration-800 ease-in-out
         ${
      isThere ? 'translate-y-0' : '-translate-y-full'
    }`">
        <div className=" flex-wrap ">
            <div className="float-left space-x-4">
              <a href="./"  className="transition-colors duration-200 hover:text-blue-600">Home </a>
              <a href="./#PaintingsArt"  className="transition-colors duration-200 hover:text-blue-600">Paintings </a>
              <a href="./#DigitalArt"  className="transition-colors duration-200 hover:text-blue-600">Digital Art </a>
              <a href="./CodingProjects"  className="transition-colors duration-200 hover:text-blue-600">Coding Projects </a>
            </div>
            
            <div className="float-right space-x-4">
              <a href="https://github.com/kushne21"  className="transition-colors duration-200 hover:text-blue-600"> Github</a>
              <a href="https://www.linkedin.com/in/ashton-kushner-9b52b32a6/"  className="transition-colors duration-200 hover:text-blue-600"> LinkedIn </a>
              <a href="mailto:kushne21@msu.edu"  className="transition-colors duration-200 hover:text-blue-600">Email </a>
            </div>
        
        </div>
    </div>);
    }
    else{
        return(<div></div>);
    }
    
}