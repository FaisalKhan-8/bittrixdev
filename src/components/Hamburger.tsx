import React, { useState } from 'react';

const Hamburger = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className={`bg-black w-[40px] h-[40px] rounded-full flex flex-col items-center justify-center transition duration-300 ease-in-out delay-300 cursor-pointer   ${
        toggle ? 'gap-0 rotate-45' : 'gap-2 '
      }`}
      onClick={handleClick}>
      <div
        className={`bg-white h-[1px]  ${
          toggle ? 'rotate-90 w-[20px]' : 'w-[10px] rotate-0'
        } transition duration-300 ease-in-out delay-300`}></div>
      <div className='bg-white h-[1px] w-[20px]'></div>
      <div
        className={`bg-white h-[1px]  ${
          toggle ? 'rotate-90 w-[20px]' : 'w-[10px] rotate-0'
        } transition duration-300 ease-in-out delay-300`}></div>
    </div>
  );
};

export default Hamburger;
