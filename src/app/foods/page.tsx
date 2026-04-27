import FoodCard from '@/components/food/foodcard';
import React from 'react'

const getFoods = async () => {
    const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random");
    const data = await res.json();
    return data.foods || [];
};

const page = async () => {
    const foods = await getFoods();
    console.log(foods)
    return (
        <div>
            <div className='text-center bg-purple-500 text-white py-10'>
                <h1 className='font-bold text-3xl'>All {foods.length} Foods</h1>
            </div>
            <div>
                {
                    foods.map((food) => (
                        <FoodCard key={food.id} food={food}></FoodCard>
                    ))
                }
            </div>
        </div>
    )
}

export default page