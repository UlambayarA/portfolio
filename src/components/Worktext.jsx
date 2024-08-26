import { UBcabButton } from "./UBcabButton";
export const Worktext = ({ Ubcab, tex }) => {
  return (
    <div className=" p-[48px] dark:bg-[#1F2937] flex flex-col items-center justify-center ">
      <div className="dark:text-white">{Ubcab}</div>
      <div className="max-w-[480px] flex flex-wrap dark:text-[#D1D5DB]">
        {
          (tex =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.")
        }
      </div>
      <div className="flex max-w-[480px] flex-wrap gap-[8px]">
        <div>{<UBcabButton ug="React" />}</div>
        <div>{<UBcabButton ug="React" />}</div>
        <div>{<UBcabButton ug="React" />}</div>
        <div>{<UBcabButton ug="React" />}</div>
        <div>{<UBcabButton ug="React" />}</div>
        <div>{<UBcabButton ug="React" />}</div>
        <div>{<UBcabButton ug="React" />}</div>
        <div>{<UBcabButton ug="React" />}</div>
        <div>{<UBcabButton ug="React" />}</div>
      </div>
    </div>
  );
};
