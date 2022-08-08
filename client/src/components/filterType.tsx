function filterType({food}: {food: 'fish' | 'beef' | 'chicken' | 'vegetarian' | 'vegan' | 'pig'}) {
  let icon = ''
  let name = ''

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
    <div className="flex flex-col items-center cursor-pointer font-PoppinsRegular">
      <span className="w-6 mb-0.5">{icon}</span>
      <span className="text-xs text-greys-200">{name}</span>
    </div>
  );
}
  
export default filterType;