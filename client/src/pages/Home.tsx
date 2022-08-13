import { useState } from "react";
import FilterType from "../components/filterType";
import FilterRange from "../components/filterRange"
import CardReceipt from "../components/cardReceipt"

function Home() {
    let [clickedButton, setClickedButton] = useState(false);

  return (
    <section className={clickedButton === false ? 'w-screen h-full bg-snow' : 'fixed w-screen h-full bg-snow'}>
      <div className='w-screen h-full px-5 pt-5 pb-2 border-b-2 border-greys-100 mb-5'>

        <div className="w-full h-10 bg-snow rounded-full flex justify-between items-center mb-4 border border-greys-100 hover:drop-shadow-md">
          <button className='h-10'>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className='mx-4' xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="15.1641" height="15.1767" rx="7.58207" stroke="#4E4E4E" stroke-width="2"/>
            <rect width="8.58523" height="2.07684" rx="1.03842" transform="matrix(0.706847 0.707366 -0.706847 0.707366 13.9312 12.458)" fill="#4E4E4E"/>
            </svg>
          </button>

          <input type="search" placeholder="Rechercher un plat" className="h-9 focus:outline-none text-sm placeholder-greys-200 text-smoky w-full font-PoppinsRegular"/>

          <button onClick={() => {setClickedButton(clickedButton = true)}} className='h-10'>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className='mx-4' xmlns="http://www.w3.org/2000/svg">
            <rect x="11" y="1" width="8" height="8" rx="4" stroke="#4E4E4E" stroke-width="2"/>
            <rect y="4" width="12" height="2" rx="1" fill="#4E4E4E"/>
            <rect x="9" y="19" width="8" height="8" rx="4" transform="rotate(-180 9 19)" stroke="#4E4E4E" stroke-width="2"/>
            <rect x="20" y="16" width="12" height="2" rx="1" transform="rotate(-180 20 16)" fill="#4E4E4E"/>
            </svg>
          </button>
        </div>
        
      </div>

      <div className='flex flex-col gap-6 px-5'>
        <CardReceipt title='Poulet laqué' img='https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80' time='12' ingredient='3' food='🍗' price='1,30'/>
        <CardReceipt title='Pate bolognaise' img='https://images.unsplash.com/photo-1567423285116-c31e6a93e939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' time='5' ingredient='4' food='🥩' price='1,80'/>
        <CardReceipt title='Saumon fumé' img='https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' time='8' ingredient='3' food='🐟' price='2,50'/>
      </div>

      <div className={clickedButton === false ? 'hidden' : 'block w-screen h-full absolute top-0 left-0 overflow-hidden bg-greys-500 pt-4 text-smoky'}>
        <div className='h-full w-full bg-snow rounded-t-xl py-4'>

          <div className='px-5 grid grid-cols-3 h-11 border-b-2 border-greys-100'>
            <button onClick={() => {setClickedButton(clickedButton = false)}} className=' w-4 h-4'>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="1.33353" width="1.8856" height="26.3985" rx="0.942802" transform="rotate(-45 0 1.33353)" fill="#4E4E4E"/>
              <rect x="18.6664" y="0.00012207" width="1.8856" height="26.3985" rx="0.942802" transform="rotate(45 18.6664 0.00012207)" fill="#4E4E4E"/>
              </svg>
            </button>
            <span className= 'font-PoppinsMedium text-base justify-self-center'>Filtres</span>
          </div>

          <div className='px-5'>
            <span className='font-PoppinsMedium text-base block my-4'>Type de régime</span>

            <div className='grid grid-cols-3 grid-rows-2 gap-3'>
              <FilterType food='chicken'/>
              <FilterType food='beef'/>
              <FilterType food='fish'/>
              <FilterType food='pig'/>
              <FilterType food='vegetarian'/>
              <FilterType food='vegan'/>
            </div>
          </div>

          <div className='pt-4 px-5 flex flex-col gap-4'>
            <FilterRange range='price'/>
            <FilterRange range='time'/>
            <FilterRange range='ingredient'/>
          </div>

          <div className='mt-auto px-4 text-PoppinsRegular text-base flex justify-between items-center absolute bottom-4 w-full'>
            <span className='underline text-smoky'>Tout effacer</span>
            <button className='py-2 px-12 rounded-lg bg-smoky text-snow'>Appliquer</button>
          </div>
          

        </div>
      </div>

    </section>
  );
}

export default Home;