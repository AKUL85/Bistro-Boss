import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import imgBanner from '../../../assets/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu'
import useMenu from '../../../Hooks/Hooks';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/dessert-bg.jpeg'
import pizzaImg from '../../../assets/pizza-bg.jpg'
import soupImg from '../../../assets/soup-bg.jpg'
import saladImg from '../../../assets/salad-bg.jpg'
function Menu(props) {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={imgBanner} title="Our Menu"></Cover>
            <SectionTitle subheading="Don't Miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title="Dessert" coverImg={dessertImg}></MenuCategory>
             <MenuCategory items={pizza} title="Pizza" coverImg={pizzaImg}></MenuCategory>
              <MenuCategory items={salad} title="Salad" coverImg={saladImg}></MenuCategory>
             <MenuCategory items={soup} title="Soup" coverImg={soupImg}></MenuCategory>



        </div>
    );
}

export default Menu;