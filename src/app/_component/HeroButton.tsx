import React from 'react';

function HeroButton() {
  return (
    <button className="relative w-40 h-12 border border-black bg-white rounded-full overflow-hidden group"> 
      <span className="absolute inset-0 bg-black rounded-4xl scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left z-0" />
      <span className="relative z-10 font-bold text-md text-black group-hover:text-white transition-colors duration-300">
        Learn more
      </span>
    </button>
  );
}

export default HeroButton;
