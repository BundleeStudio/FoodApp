import { useState } from "react";
import FilterPage from "./Filter"
import CardReceipt from "../components/CardReceipt"
import SearchIcon from "../icon/search.svg"
import FilterIcon from "../icon/filter.svg"

function Home() {
    const [clickedButton, setClickedButton] = useState(false);

  return (
    <section className={!clickedButton ? 'w-screen h-full bg-snow' : 'fixed w-screen h-full bg-snow'}>
      <div className='w-screen h-full px-5 pt-5 pb-2 border-b-2 border-greys-100 mb-5'>

        <div className="w-full h-10 bg-snow rounded-full flex justify-between items-center mb-4 border border-greys-100 hover:drop-shadow-md">
          <button className='h-10 mx-4'>
            <img src={SearchIcon} alt="search icon" className='max-w-none'/>
          </button>

          <input type="search" placeholder="Rechercher un plat" className="h-9 focus:outline-none text-sm placeholder-greys-200 text-smoky w-full font-PoppinsRegular"/>

          <button onClick={() => {setClickedButton(!clickedButton)}} className='h-10 mx-4'>
            <img src={FilterIcon} alt="filter icon" className='max-w-none'/>
          </button>
        </div>
        
      </div>

      <div className='flex flex-col gap-6 px-5'>
        <CardReceipt title='Poulet laqué' img='https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80' time='12' ingredient='3' food='🍗' price='1,30'/>
        <CardReceipt title='Pate bolognaise' img='https://images.unsplash.com/photo-1567423285116-c31e6a93e939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' time='5' ingredient='4' food='🥩' price='1,80'/>
        <CardReceipt title='Saumon fumé' img='https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' time='8' ingredient='3' food='🐟' price='2,50'/>
      </div>

      {clickedButton && <FilterPage button={() => {setClickedButton(!clickedButton)}} />}

    </section>
  );
}

export default Home;