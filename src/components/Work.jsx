export const Work = ({ imageUrl }) => {
  return (<div className="p-[48px] flex justify-center md:w-[576px]">
    <div class="p-[48px] w-[384px] rounded-[12px] dark:bg-[#374151] bg-gray-100 ">
      <img  src={imageUrl} alt="" />
    </div></div>
  );
};
