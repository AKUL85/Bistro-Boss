import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import imgBanner from '../../../assets/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu'
function Menu(props) {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={imgBanner} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={imgBanner} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={imgBanner} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
}

export default Menu;