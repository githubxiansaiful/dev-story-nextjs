import { ArrowLeft, PlayCircle, ShoppingCart } from 'lucide-react';
import { Play } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const getSingleFood = async (id) => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
    const data = await res.json();
    return data.details;
}

const page = async ({ params }) => {
    const { id } = await params;
    const food = await getSingleFood(id);
    if (!food) {
        return <h2>Food not found!</h2>
    }
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-12">
            {/* Back Button */}
            <div className="max-w-6xl mx-auto px-4 pt-6">
                <Link
                    href="/foods"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Menu
                </Link>
            </div>

            <div className="max-w-6xl mx-auto px-4 pt-8 grid md:grid-cols-2 gap-10">
                {/* Left - Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-auto">
                    <Image
                        src={food.foodImg}
                        alt={food.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/80 px-5 py-2 rounded-2xl font-bold text-2xl shadow">
                        ৳{food.price}
                    </div>
                </div>

                {/* Right - Details */}
                <div className="space-y-8">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 px-4 py-1 rounded-full text-sm font-medium">
                                {food.category}
                            </span>
                            <span className="bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-full text-sm">
                                {food.area}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white">
                            {food.title}
                        </h1>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                        <button className="flex-1 bg-orange-600 hover:bg-orange-700 active:scale-95 transition text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-3 text-lg">
                            <ShoppingCart className="w-6 h-6" />
                            Add to Cart
                        </button>

                        <button className="flex-1 border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 font-semibold py-4 rounded-2xl transition">
                            Buy Now
                        </button>
                    </div>

                    {/* Description / Info */}
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow">
                        <h3 className="font-semibold text-lg mb-4">About this dish</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            A delicious  dish from {food.category} {food.area}.
                            Perfect for food lovers looking for authentic flavors.
                        </p>
                    </div>

                    {/* Video Section */}

                    <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow">
                        <div className="p-6  dark:border-gray-800 flex items-center gap-3">
                            <PlayCircle className="w-6 h-6 text-red-600" />
                            <h3 className="font-semibold text-lg">Watch Recipe Video</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page