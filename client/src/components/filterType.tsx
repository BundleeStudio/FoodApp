import { useState } from "react";

function filterType({food}: {food: 'fish' | 'beef' | 'chicken' | 'vegetarian' | 'vegan' | 'pig'}) {
  let icon = ''
  let name = ''


  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [clickedButton, setClickedButton] = useState(false);

  if(food=== 'fish') {
    icon = '🐟'
    name = 'Poisson'
  } else if(food === 'beef') {
    icon = '🥩'
    name = 'Viande'
  } else if(food === 'pig') {
    icon = '🥓'
    name = 'Porc'
  } else if(food === 'chicken') {
    icon = '🍗'
    name = 'Volaille'
  } else if(food === 'vegetarian') {
    icon = '🥕'
    name = 'Végétarien'
  } else if(food === 'vegan') {
    icon = '🥬'
    name = 'Vegan'
  }

  return (
    <div onClick={() => {clickedButton === false ? setClickedButton(clickedButton = true) : setClickedButton(clickedButton = false)}} className={clickedButton === false ? "flex items-center cursor-pointer font-PoppinsMedium px-2 py-2 bg-greys-300 text-smoky rounded-lg" : "flex items-center cursor-pointer font-PoppinsMedium px-2 py-2 bg-smoky text-snow rounded-lg" }>
      <span className="text-xl mr-1">{icon}</span>
      <span className="text-sm">{name}</span>
    </div>
  );
}
  
export default filterType;