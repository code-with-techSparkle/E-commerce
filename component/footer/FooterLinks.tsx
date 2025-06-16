import React from 'react';

interface FooterLinksProps {
  icon: React.ReactNode;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ icon }) => {
  return (
    <div className='bg-white text-black flex justify-center items-center w-10 h-10 rounded-full relative overflow-hidden group transition-all duration-300'>
      <div className='size-4 group-hover:opacity-0 transition-all duration-300'>
        {icon}
      </div>
      <div className='w-10 h-10 absolute -bottom-10 group-hover:bottom-0 bg-black text-white flex justify-center items-center duration-300 rounded-full'>
        <div className='size-4'>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
