import { Center } from "@/components/Center";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Iconlist } from "@/components/Iconlist";
import { Upwork } from "@/components/Upwork";
import { Work } from "@/components/Work";
import { Worktext } from "@/components/Worktext";
import { End } from "@/components/End";
import { Mobile } from "@/components/Mobile";
import {useState} from 'react';
export default function Home() {
const [isShown,setIsShown]=useState(false)
const mobileElement= isShown ? <Mobile isShown={isShown} setIsShown={setIsShown}/> : null
  return (
    <div className="flex flex-col   container mx-auto relative"> 
      <div className=" container  background-image w-[px] ">
        <Header isShown={isShown} setIsShown={setIsShown}/>
        {mobileElement}
        <Hero />
        <Center />
        <Iconlist />
        <Upwork />
      </div>
      <div className="md:w- dark:bg-[#030712] ">
        <div className="md:flex justify-center">
          <div>
            
            <Work imageUrl="/zurag.png" />
          </div>
          <div>
            <Worktext Ubcab={"Ucab"} />
          </div>
        </div>
        <div className="md:flex justify-center">
          <div>
            <Worktext Ubcab={"Mentorhub"} />
          </div>
          <div>
            <Work imageUrl="/Picture.png" />
          </div>
        </div>
        <div className="md:flex justify-center">
          <div>
            <Work imageUrl="3.png" />
          </div>
          <div>
            <Worktext Ubcab={"Itoim"} />
          </div>
        </div>
      </div>
      <div className="md:w-">
        <End />
      </div>
    </div>
   
  );
}
