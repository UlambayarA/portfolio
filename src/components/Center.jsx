export const Center = () => {
  return (
    <div class="  bg-gray-50 dark:bg-[#111827] ">
      <div class="flex justify-center py-[80px] ">
        <div class=" bg-slate-200 w-[105px] h-[28px]  text-gray-600 rounded-[20px] text-center ">
          About me
        </div>
      </div>
      <div class="md:flex justify-between gap-[48px] md:p-[80px] p-[16px]">
        <div >
          <img   src="./zurag2.png" alt="" />
        </div>
        <div class="max-w-[584px] ">
          <h1 class="text-[30px] font-semibold dark:text-white ">
            Curious about me? Here you have it:
          </h1>
          <p class="font-normal text-[16px] text-gray-600 dark:text-[#D1D5DB] dark:bg-[#111827] ">
            I'm a designer turned full stack developer, passionate about
            React.js and Node.js. I excel in blending technical and visual
            aspects to craft exceptional digital products, prioritizing user
            experience, precise design, and optimized code.
          </p>
          <p class="font-normal text-[16px] text-gray-600 dark:text-[#D1D5DB] dark:bg-[#111827] ">
            Since starting my web development journey in 2015, I've embraced
            challenges and kept up with the latest tech trends. Now in my early
            thirties, seven years in, I'm building cutting-edge web apps using
            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
          </p>
          <p class="font-normal text-[16px] text-gray-600 dark:text-[#D1D5DB] dark:bg-[#111827] ">
            With a progressive mindset, I enjoy the entire product development
            process, from ideation to execution. Off duty, you'll find me on
            Twitter, tracking startup journeys, or unwinding. Follow me for tech
            insights and public project updates on Twitter or GitHub.
          </p>
          <p class="font-normal text-[16px] dark:text-[#D1D5DB] text-gray-600 dark:bg-[#111827] ">
            Finally, some quick bits about me.
          </p>
          <ul className="dark:bg-[#111827] ">B.E. in Computer Engineering</ul>
          <p class="font-normal text-[16px] dark:text-[#D1D5DB] text-gray-600 dark:bg-[#111827] ">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
