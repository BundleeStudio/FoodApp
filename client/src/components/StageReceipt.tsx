import React from 'react'

function StageReceipt({stage, text}: {stage:number, text:string}) {
  return (
    <>
        <span className='font-PoppinsMedium block mt-3 text-base text-greys-200 mb-2'>Étape {stage}</span>
        <p className='font-PoppinsRegular text-smoky'>{text}</p>
    </>
  )
}

export default React.memo(StageReceipt);