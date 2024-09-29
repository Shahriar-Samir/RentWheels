import React from 'react';

const App: React.FC = () => {
  return (
    <main>
      bg-[url()]  bg-cover
      <header className='w-full h-[100vh] relative'>
        <div className="absolute inset-0 bg-[url('/images/banner.jpg')] w-full h-full bg-cover"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent w-full h-full flex justify-center items-center">
        <h1 className='text-6xl font-bold '>Welcome to the</h1>
        </div>
          
      </header>
    </main>
  );
};

export default App; 