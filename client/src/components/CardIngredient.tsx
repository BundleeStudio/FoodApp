import React from 'react'

function CardIngredient({img, weight, name}: {img: string, weight: string, name: string}) {
  return (
    <div className='w-full'>
        <img src={img} alt="poulet" className='rounded-lg object-cover object-center'/>
        <span className='font-PoppinsSemiBold text-sm block mt-1 text-smoky'>{weight}</span>
        <span className='font-PoppinsRegular text-sm text-smoky'>{name}</span>
    </div>
  )
}

export default React.memo(CardIngredient);
