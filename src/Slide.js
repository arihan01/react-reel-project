import React from 'react';

const Slide = ({ content }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 h-screen flex items-center justify-center inset-0">
      {content}
    </div>
  );
};

export default Slide;
