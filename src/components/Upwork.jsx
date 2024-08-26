export let Upwork = ({ title1, text1, date }) => {
  return (
    <div className="flex flex-col items-center gap-[48px] dark:bg-[#111827] bg-gray-50 p-[16px]">
      <div class="lg:flex  gap-[48px] p-[32px] dark:bg-[#1F2937] bg-white max-w-[896px]  rounded-[12px] shadow-md">
        <div>
          <img src="./upwork.png" alt="" />
        </div>
        <div className="">
          <div className="dark:text-white">{(title1 = "Sr. Frontend Developer")}</div>
          <div className="max-w-[384px] text-gray-600">
            {
              (text1 = (
                <div className="dark:text-[#D1D5DB]">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              ))
            }
          </div>
        </div>
        <div>{(date = <div className="dark:text-[#D1D5DB]">Nov 2021 - Present</div>)}</div>
      </div>
      <div class="lg:flex gap-[48px] p-[32px] dark:bg-[#1F2937] bg-white max-w-[896px]  rounded-[12px] shadow-md">
        <div>
          <img src="./upwork.png" alt="" />
        </div>
        <div>
          <div className="dark:text-white">{(title1 = "Team Lead")}</div>
          <div className="max-w-[384px] text-gray-600">{text1}</div>
        </div>
        <div>{(date = <div className="dark:text-[#D1D5DB]">Nov 2023 - Present</div>)}</div>
      </div>
      <div class="lg:flex gap-[48px] p-[32px] dark:bg-[#1F2937] bg-white max-w-[896px]  rounded-[12px] shadow-md">
        <div>
          <img src="./upwork.png" alt="" />
        </div>
        <div>
          <div className="dark:text-white">{(title1 = "Full Stack Developer")}</div>
          <div className="max-w-[384px] text-gray-600">
            {
              (text1 = (
                <div className="dark:text-[#D1D5DB]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              ))
            }
          </div>
        </div>
        <div>{(date = <div className="dark:text-[#D1D5DB]">Nov 2024 - Present</div>)}</div>
      </div>
    </div>
  );
};
