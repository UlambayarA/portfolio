import { UBcabButton } from "./UBcabButton";
import { Cat } from "./svg/Cat";
import { Bird } from "./svg/Bird";
import { Logo } from "./svg/Logo";
export const End = () => {
  return (
    <div className="md:text-center dark:bg-black flex flex-col items-center md:px-[80px] px-[16px] py-[96px] gap-[48px]">
      <div>
        <UBcabButton ug={"Get in touch"} />
      </div>
      <div className="flex flex-wrap dark:text-[#D1D5DB] ">
        <p>
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div class=" font-bold text-[36px] dark:text-white">tom@pinecone.mn</div>
      <div class=" font-bold text-[36px] dark:text-white" v>
        +976 88112233
      </div>
      <div>
        <div className="dark:text-[#D1D5DB]">You may also find me on these platforms!</div>
        <div>
          
          <div class="flex pt-[48px] gap-[5px]">
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
      </div>
    </div>
  );
};
