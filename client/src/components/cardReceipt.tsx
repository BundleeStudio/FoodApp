function Card({title, img, time, ingredient, food, price}: {title:string, img:string, time:string, ingredient:string, food:string, price:string}) {

    return (
        <div className='w-full h-full'>
          <div className='w-full h-64'>
            <img src={img} alt={title} className='w-full h-full rounded-lg object-cover object-center'/>
          </div>
          <span className='mt-3 mb-1 text-base block font-PoppinsMedium text-smoky'>{title}</span>
          <div className='my-grid grid gap-3 items-center'>
            <div className='flex flex-col items-center'>
              <span className='font-PoppinsRegular text-base text-smoky'>{time}</span>
              <span className='text-greys-200 font-PoppinsRegular text-xs'>Min</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='font-PoppinsRegular text-base text-smoky'>{ingredient}</span>
              <span className='text-greys-200 font-PoppinsRegular text-xs'>Ing.</span>
            </div>
            <span className='text-xl'>{food}</span>
            <span className='font-PoppinsRegular text-sm text-smoky justify-self-end'>~{price}€</span>
          </div>
        </div>
    );
}

export default Card;