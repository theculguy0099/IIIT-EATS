import React , {useContext} from 'react'
import './FoodItem.css';
import {assets} from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,price,description,image,canteen}) => {

    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={url+"/images/"+image} alt="food item" />
            {
                !cartItems[id]
                ?<img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt="icon" />
                :<div className='food-item-counter'>
                    <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]} </p>
                    <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
        }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="rating" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
            <p className="food-item-canteen">Canteen: <b>{canteen.toUpperCase()}</b></p>
        </div>
      
    </div>
  )
}

export default FoodItem;