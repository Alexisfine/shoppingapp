import React from 'react';
import './Cart.scss'
import {DeleteOutline} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {removeItem, resetCart} from "../../redux/cartReducer";
import {loadStripe} from "@stripe/stripe-js";
import {makeRequest} from "../../makeRequest";

const Cart = () => {
    // const data = [
    //     {
    //         id: 1,
    //         img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Long Sleeve Graphic T-shirt",
    //         desc: "Long Sleeve Graphic T-shirt",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 2,
    //         img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Coat",
    //         desc: "Coat",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     }
    // ]

    const products = useSelector(state=>state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach(item=>
            total = (total +=  item.quantity * item.price));
        return total.toFixed(2);
    }

    const stripePromise = loadStripe('pk_test_51MGYTuLZZfyzAkDDeT7O4dTntUyUjWr0URzVe8p9Amo2P3YgxjoOx8wKkFIqRu4P83pDI3EEGFLfgVnyIRJ1oTfC009tjjlT4z')
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = makeRequest.post('/orders/', {products});
            await stripe.redirectToCheckout({sessionId:res.data.stripeSession.id})
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {products?.map(item=> (
                <div className='item' key={item.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt=''/>
                    <div className='details'>
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className='price'>
                            {item.quantity} X ${item.price}
                        </div>

                    </div>
                    <DeleteOutline className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
                </div>
            ))}
            <div className='total'>
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <span className='reset' onClick={()=>dispatch(resetCart())}>RESET CART</span>
        </div>
    );
};

export default Cart;