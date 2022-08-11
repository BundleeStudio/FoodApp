import { useState } from "react";

function filterRange({range}: {range: 'price' | 'time' | 'ingredient'}) {
    let title = ''
    let type = ''

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(0);
    const MAX = 10;
    const getBackgroundSize = () => {
      return {
        backgroundSize: `${(value * 100) / MAX}% 100%`,
      };
    };

  if(range=== 'price') {
    title = 'Fourchette de prix'
    type = '€'
  } else if(range === 'time') {
    title = 'Temps'
    type = 'Min'
  } else if(range === 'ingredient') {
    title = 'Ingrédients'
    type = 'Inp.'
  }

  return (
    <div>
        <span className='font-PoppinsMedium text-base'>{title}</span>
        <div className='font-PoppinsRegular text-sm flex justify-between mt-2 mb-1.5'>
            <span>0 {type}</span>
            <span>{value} {type}</span>
        </div>
        <input type="range" min="0" max={MAX} onChange={(e: { target: { value: any; }; }) => setValue(e.target.value)} style={getBackgroundSize()} value={value} className='w-full h-1.5 bg-greys-300 bg-no-repeat rounded-full bg-gradient-to-r from-black to-black'/>
    </div>
  );
}
  
export default filterRange;