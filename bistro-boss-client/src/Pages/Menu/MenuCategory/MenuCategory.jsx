import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

function MenuCategory({items,title,coverImg}) {
    return (
        <div className='pt-8'>
            {title&&<Cover img={coverImg} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-4 my-16'>
                {
                    items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn btn-primary">Order Now</button></Link>
        </div>
    );
}

export default MenuCategory;