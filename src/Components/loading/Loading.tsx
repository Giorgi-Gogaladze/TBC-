import React from 'react'

const Loading: React.FC = () => {
  return (
    <div className="loading w-full min-h-[80vh] bg-black flex flex-col items-center justify-center">
      <div className="spin w-20 h-20 border-8 border-dotted border-white rounded-full animate-spin flex items-center justify-center"></div>
      <p className="text-2xl font-bold text-white mt-4 font-lato">Loading . . .</p>
    </div>
  );
  
}

export default Loading