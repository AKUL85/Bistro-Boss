import React from 'react';

function FoodCard({ item }) {
    const { name, recipe, image, price } = item;
    

    return (
        <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
            />
            <div className="p-5">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-600 text-sm mb-3">{recipe}</p>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-yellow-600">${price}</span>
                    <button className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600 transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;
