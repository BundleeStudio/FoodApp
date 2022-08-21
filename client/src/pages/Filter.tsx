import React from "react";
import FilterType from "../components/FilterType";
import FilterRange from "../components/FilterRange"
import CrossIcon from "../icon/cross.svg"
import Separator from "../components/Separator"

function Filter({button}: {button: React.MouseEventHandler<HTMLButtonElement>}) {
    
  return (
    <div className='block w-screen h-full absolute top-0 left-0 overflow-hidden bg-greys-500 pt-4 text-smoky'>
        <div className='h-full w-full bg-snow rounded-t-xl py-4'>
                <div className=' grid grid-cols-3 h-11 border-b-2 border-greys-100'>
                    <button onClick={button} className=' w-4 h-4'>
                    <img src={CrossIcon} alt="return icon" className='max-w-none pl-5'/>
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

                <Separator />

                <div className='flex flex-col gap-4'>
                    <FilterRange range='price'/>
                    <FilterRange range='time'/>
                    <FilterRange range='ingredient'/>
                </div>
            </div>

                <div className='px-4 text-PoppinsRegular text-base flex justify-between items-center absolute bottom-4 w-full'>
                    <span className='underline text-smoky'>Tout effacer</span>
                    <button className='py-2 px-12 rounded-lg bg-smoky text-snow'>Appliquer</button>
                </div>

        </div>
    </div>
    )
}

export default React.memo(Filter);