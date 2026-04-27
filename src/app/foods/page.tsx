import React from 'react'

const getFoods = () => {
    const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random")
}

const page = () => {
    return (
        <div>page</div>
    )
}

export default page