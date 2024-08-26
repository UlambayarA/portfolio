export const Icon = ({ imgu, text }) => {
  return (
    <div class="flex flex-col w-[100px] h-[88px]">
     <div class="flex justify-center"> {imgu} </div>
      <p class="font-normal text-lg text-gray-600 dark:text-[#D1D5DB]">{text}</p>
    </div>
  );
};
