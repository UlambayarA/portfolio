import { Darkcomp } from "./darkComp";

export const Mobile = ({isShown,setIsShown}) => {
  return (
    <div className="flex md:hidden w-[320px] p-4 h-screen fixed top-0 right-0 dark:bg-black bg-white">
      <div className="w-full flex flex-col">
        <div className="flex justify-between border-b-[2px] border-white">
          <div className="dark:text-white text-[30px] font-black">TOM</div>
          <div className="dark:text-white" onClick={()=>{setIsShown(!isShown)}}>X</div>
        </div>
        <div className="p-4 border-b-[2px] border-white">
          <div className="dark:text-white">About</div>
          <div className="dark:text-white">Work</div>
          <div className="dark:text-white">Contact</div>
        </div>
        <div className="flex justify-between border-b-[2px] border-white">
          <div className="dark:text-white text-inter text-[16px] font-extralight">Switch theme</div>
          <Darkcomp />
        </div>
        <div>
          <button className= " text-white rounded-[12px] w-[288px] h-[46px]dark:text-black bg-gray-900 dark:bg-white">Download CV</button>
        </div>
      </div>
    </div>
  );
};
