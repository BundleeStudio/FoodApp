import { Link } from "react-router-dom"
import Separator from "../components/Separator"
import Return from "../icon/return.svg"
// import Share from "../icon/share.svg"
import CardIngredient from "../components/CardIngredient"
import StageReceipt from "../components/StageReceipt"

function Receipt() {
    return (
      <>
        <div className='w-full grid grid-cols-2 absolute px-4 pt-3'>
          <Link to="/home">
            <div className='w-8 h-8 bg-snow rounded-full flex items-center justify-center'>
              <img src={Return} alt="retour"/>
            </div>
          </Link>

          {/* <div className='w-8 h-8 bg-snow rounded-full justify-self-end flex items-center justify-center'>
            <img src={Share} alt="partager" />
          </div> */}
        </div>

        <img src="https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80" alt="poulet laqué" className='w-full h-60 object-cover object-center'/>
        
        <div className='p-4'>

          <h1 className='font-PoppinsSemiBold text-2xl'>Poulet laqué (sans back end)</h1>

          <div className='receipt-grid grid gap-3 items-center mt-3 font-PoppinsRegular text-base'>
            <span className='font-PoppinsRegular text-smoky'>12 Min</span>
            <span className='font-PoppinsRegular text-smoky'>4 Ing.</span>
            <span className='text-xl'>🍗</span>
            <span className='font-PoppinsRegular text-smoky justify-self-end'>~1,30€</span>
          </div>

          <Separator />

          <span className='font-PoppinsSemiBold text-lg mb-3 block text-smoky'>Ustensiles</span>
          <span className='font-PoppinsRegular text-sm text-smoky'>Plaque de cuisson, Poêle</span>

          <Separator />

          <span className='font-PoppinsSemiBold text-lg mb-3 block text-smoky'>Ingrédients</span>

          <div className='grid grid-cols-4 gap-5'>
            <CardIngredient img="https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fcuisine.2Fguides-cuisine.2Fbatterie-ab-label-rouge-tout-savoir-sur-la-viande-de-poulet-36781.2F14449858-2-fre-FR.2Fbatterie-ab-label-rouge-tout-savoir-sur-la-viande-de-poulet.2Ejpg/1200x1200/quality/80/crop-from/center/batterie-ab-label-rouge-tout-savoir-sur-la-viande-de-poulet.jpeg" weight="200 g" name="Blanc de poulet"/>
            <CardIngredient img="https://lacagettedes4saisons.com/105-large_default/livraison-panier-legumes-entreprise-batavia-raisonnee-production-st-julien-de-concelle-salade.jpg" weight="100 g" name="Salade"/>
            <CardIngredient img="https://resize1.prod.docfr.doc-media.fr/s/1200/ext/eac4ff34/content/2022/7/4/huile-d-olive-7aeda1564faf724b.jpeg" weight="un peu" name="Huile d'olive"/>
          </div>   

          <Separator />      

          <span className='font-PoppinsSemiBold text-lg text-smoky'>Recette</span>
          <StageReceipt stage={1} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem." />
          <StageReceipt stage={2} text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <StageReceipt stage={3} text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum quae quisquam ad soluta! Minus, porro." />

        </div>
      </>
    );
  }
  
  export default Receipt;