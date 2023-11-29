import React from 'react'

const Suscribe = () => {
  return (
    <div className=" p-4 flex justify-between sm:justify-center gap-8 items-center">
      <div className="border-b-[0.2px] w-fit border-opacity-20 border-white">
        <input
          type="email"
          placeholder="Sign up for my newsletter"
          className="p-2 border-none  mr-2 rounded-3xl bg-transparent outline-none"
          disabled
        />
      </div>
      <button className="bg-text-green text-black font-bold rounded-full p-8 w-10 h-10 flex items-center justify-center text-[10px]">
        Subscribe
      </button>
    </div>
  );
}

export default Suscribe