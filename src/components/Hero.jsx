import { Location } from "./svg/Location";
import { Cat } from "./svg/Cat";


import { Bird } from "./svg/Bird";
import { Logo } from "./svg/Logo";
export const Hero = () => {
  return (
    <div class=" md:flex pt-[96px] dark:bg-black justify-between  md:p-[80px] p-[16px] mx-auto">
      <div className="">
        <div class="max-w-[376px] dark:text-white font-bold text-[60px] leading-[72px] ">
          Hi, I’m Tom 👋
        </div>
        <div class="max-w-[600px] dark:text-white text-[#4B5563] pt-[8px]">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </div>
        <div>
          <div class="flex gap-[8px] dark:text-white pt-[48px]">
            <Location /> Ulaanbaatar, Mongolia
          </div>
          <div class="flex gap-[8px] items-center">
            <div class="h-[24px] w-[24px] flex justify-center items-center">
              <div class=" bg-green-500 w-[8px] h-[8px] rounded-[20px]"></div>
            </div>
            <div className="dark:text-white">Available for new projects</div>
          </div>
        </div>
        <div class="flex pt-[48px]">
          <div>
            <Cat />
          </div>
          <div>
            <Bird />
          </div>
          <div>
            <Logo />
          </div>
        </div>
      </div>
      <div class="md:flex justify-end">
        <div>
          <img src="./zurag.png" alt="" />
        </div>
      </div>
    </div>
  );
};
