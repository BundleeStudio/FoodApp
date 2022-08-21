import React, { useState } from "react";

function FilterRange({range}: {range: 'price' | 'time' | 'ingredient'}) {
    let title = ''
    let type = ''
    let MAX = 0

    if(range=== 'price') {
      title = 'Fourchette de prix'
      type = '€'
      MAX = 4
    } else if(range === 'time') {
      title = 'Temps'
      type = 'Min'
      MAX = 15
    } else if(range === 'ingredient') {
      title = 'Ingrédients'
      type = 'Ing.'
      MAX = 8
    }

  const [value, setValue] = useState(0);
    const getBackgroundSize = () => {
      return {
        backgroundSize: `${(value * 100) / MAX}% 100%`,
      };
    };

  return (
    <>
      <span className='font-PoppinsMedium text-base'>{title}</span>
      <div className='font-PoppinsRegular text-sm flex justify-between mb-1.5'>
          <span>0 {type}</span>
          <span>{value} {type}</span>
      </div>
      <input type="range" min="0" max={MAX} onChange={(e: { target: { value: any; }; }) => setValue(e.target.value)} style={getBackgroundSize()} value={value} className='w-full h-1.5 bg-greys-300 bg-no-repeat rounded-full bg-gradient-to-r from-black to-black mb-3'/>
    </>
  );
}
  
export default React.memo(FilterRange);