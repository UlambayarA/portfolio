import { Sun } from "@/components/svg/Sun";
import { Darkcomp } from "./darkComp";

export const Header = ({isShown,setIsShown}) => {
  return (
    <div class="flex justify-between dark:bg-black md:p-[80px] p-[16px]">
      <div class="text-[20px] font-extrabold text-center dark:text-white leading-[36px]">
        TOM
      </div>
      <div class="  hidden gap-[10px] justify-center dark:text-white items-center md:flex ">
        <div class="word">About</div>
        <div class="word">Work</div>
        <div class="word">Testimonials</div>
        <div class="word">Contact</div>
        <Darkcomp />
        <div class=" bg-black dark:bg-white w-[136px] h-[36px] rounded-[12px] text-white dark:text-black flex justify-center items-center">
          <div>Download CV</div>
        </div>
      </div>
      <div className="md:hidden" onClick={()=>{setIsShown(!isShown)}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4 12H20" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 6H20" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 18H20" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
    </div>
  );
};
