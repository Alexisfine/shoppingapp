import React from 'react';
import './Cart.scss'
import {DeleteOutline} from "@mui/icons-material";

const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic T-shirt",
            desc: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            desc: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        }
    ]


    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data?.map(item=> (
                <div className='item' key={item.id}>
                    <img src={item.img} alt=''/>
                    <div className='details'>
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className='price'>
                            ${item.price}
                        </div>

                    </div>
                    <DeleteOutline className='delete'/>
                </div>
            ))}
            <div className='total'>
                <span>SUBTOTAL</span>
                <span>TOTAL PRICE</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>RESET CART</span>
        </div>
    );
};

export default Cart;