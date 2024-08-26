import { Icon } from "@/components/Icon";
import { Javascrypt } from "./svg/Javascrypt";
import { TypeScript } from "./svg/Typescript";
import { React } from "./svg/React";
import { Next } from "./svg/Next";
import { Node } from "./svg/Node";
import { Express } from "./svg/Express";
import { Nest } from "./svg/Nest";
import { Socket } from "./svg/Socket";
import { Postgre } from "./svg/Postgre";
import { Mongo } from "./svg/Mongo";
import { Sass } from "./svg/Sass";
import { Tailwind } from "./svg/Tailwind";
import { Figma } from "./svg/Figma";
import { Cypress } from "./svg/Cypress";
import { Storybook } from "./svg/Storybook";
import { Git } from "./svg/Git";
export const Iconlist = () => {
  return (
    <div>
      <div className="md:p-[96px] p-[16px] flex flex-col gap-[48px] dark:bg-black">
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 flex justify-center w-[75px] h-[28px] rounded-[12px] font-medium text-[14px] text-gray-600 dark:text-[#D1D5DB]text-center">
            Skills
          </div>
          <div class="font-normal text-[20px] text-gray-600 dark:text-[#D1D5DB]">
            Here is a quick summary of my most recent experiences:
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex max-w-[1216px]    items-center">
            <div>
              <div className="flex flex-wrap justify-center gap-[16px] md:p-[48px] ">
                
                <Icon imgu={<Javascrypt />} text={"Javascrypte"} />
                <Icon imgu={<TypeScript />} text={"Typescript"} />
                <Icon imgu={<React />} text={"React"} />
               
                
                <Icon imgu={<Next />} text={"Next.js"} />
                <Icon imgu={<Express />} text={"Express.js"} />
                <Icon imgu={<Nest />} text={"Nest.js"} />
                
                <Icon imgu={<Socket />} text={"Socket.io"} />
                <Icon imgu={<Postgre />} text={"Postgre.SQL"} />
               
                <Icon imgu={<Mongo />} text={"MOngoDB"} />
                
                <Icon imgu={<Sass />} text={"Sass.Scss"} />
                <Icon imgu={<Tailwind />} text={"Tailwindcss"} />
                <Icon imgu={<Figma />} text={"Figma"} />
                
                <Icon imgu={<Cypress />} text={"Cypress"} />
                <Icon imgu={<Storybook />} text={"Storybook"} />
                <Icon imgu={<Git />} text={"Git"} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
