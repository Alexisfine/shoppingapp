import React from 'react';
import './FeaturedProducts.scss'
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";


const FeaturedProducts = ({type}) => {
    // const data = [
    //     {
    //         id: 1,
    //         img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Long Sleeve Graphic T-shirt",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 2,
    //         img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Coat",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 3,
    //         img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Skirt",
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 4,
    //         img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Hat",
    //         oldPrice: 19,
    //         price: 12,
    //     },
    // ]

    const {data, loading, error} = useFetch('/products?populate=*&[filters][type][$eq]='+type);
    console.log(data);
    return (
        <div className='FeaturedProducts'>
            <div className='top'>
                <h1>{type} products</h1>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries.</p>
            </div>
            <div className='bottom'>
                {error ? "Something went wrong!"
                    : loading ? "Loading"
                        : data?.map((item)=> <Card item={item} key={item.id}/>
                )}
            </div>
        </div>
    );
};

export default FeaturedProducts;