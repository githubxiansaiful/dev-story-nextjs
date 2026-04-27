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
        <div>{foods.length} total foods
            <div className='text-center'>
                <h1 className='font-bold text-3xl'>All Foods</h1>
            </div>
        </div>
    )
}

export default page