import React from 'react';

const App: React.FC = () => {
  return (
    <main>
      <header className='w-full h-[140vh] relative'>
        <div className="absolute inset-0 bg-[url('/images/banner.jpg')] w-full h-full bg-cover"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent w-full h-full flex justify-center items-center">
        <h1 className='text-6xl font-bold '>Welcome to the</h1>
        <SearchForm/>
        </div>
      </header>
    </main>
  );
};

export default App; 


const SearchForm:React.FC=()=>{
      return <section className='w-10/12 mx-auto h-[400px] bg-[#e88409] absolute bottom-[-240px]'>

      </section>
}