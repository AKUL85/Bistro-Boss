import { useState } from 'react';
import orderimg from '../../../assets/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/Hooks';
import FoodCard from '../../../component/FoodCard/FoodCard';


function Order() {
    const [tabIndex, setTabindex] = useState(0);
    const [menu] = useMenu();

    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Cover img={orderimg} title="Order Food" />

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
                <TabList className="text-center mb-5">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-6">
                        {salad.map(item => <FoodCard key={item._id} item={item} />)}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-6">
                        {pizza.map(item => <FoodCard key={item._id} item={item} />)}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-6">
                        {dessert.map(item => <FoodCard key={item._id} item={item} />)}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-6">
                        {soup.map(item => <FoodCard key={item._id} item={item} />)}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-6">
                        {drinks.map(item => <FoodCard key={item._id} item={item} />)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Order;
