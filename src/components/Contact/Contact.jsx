import React from 'react';
import './Contact.scss';
import {Facebook, Instagram, Twitter, Google, Pinterest} from "@mui/icons-material";


const Contact = () => {
    return (
        <div className='contact'>
            <div className='wrapper'>
                <span>BE IN TOUCH WITH US:</span>
                <div className='mail'>
                    <input type='text' placeholder='Enter your email'/>
                    <button>JOIN US</button>
                </div>
                <div className='icons'>
                    <Facebook/>
                    <Instagram/>
                    <Twitter/>
                    <Google/>
                    <Pinterest/>
                </div>
            </div>
        </div>
    );
};

export default Contact;