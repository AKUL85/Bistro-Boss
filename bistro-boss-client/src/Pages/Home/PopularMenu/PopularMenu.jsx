import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/Hooks';

function PopularMenu(props) {
    const [menu]=useMenu();
    const popular=menu.filter(item=>item.category==='popular')
   
    return (
        <section>
            <SectionTitle
            subheading={"Popular item"}
            heading={"From our menu"}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
        
    );
}

export default PopularMenu;