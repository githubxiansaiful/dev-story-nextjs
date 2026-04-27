// components/FoodCard.tsx
'use client';

import Image from 'next/image';
import { ShoppingCart, Eye } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function FoodCard({ food, onAddToCart, onViewDetails }: FoodCardProps) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const { id, foodImg, category, price } = food;

    return (
        <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
            {/* Image Container */}
            <div className="relative h-52 overflow-hidden">
                <Link href={`/food/${id}`}>
                    <Image
                        src={food.foodImg}
                        alt={food.title}
                        fill
                        className={`object-cover transition-transform duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                        onLoadingComplete={() => setImageLoaded(true)}
                    />
                </Link>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md">
                    {food.category}
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 left-4 bg-white dark:bg-gray-900 text-sm font-bold px-4 py-1.5 rounded-2xl shadow-md">
                    ৳{food.price}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="font-semibold text-lg leading-tight line-clamp-2 min-h-[3.2rem] text-gray-800 dark:text-gray-100">
                    {food.title}
                </h3>
            </div>

            {/* Buttons */}
            <div className="px-5 pb-5 flex gap-3">
                <button
                    onClick={() => onAddToCart?.(food)}
                    className="flex-1 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200"
                >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                </button>

                <button
                    onClick={() => onViewDetails?.(food)}
                    className="flex-1 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200"
                >
                    <Eye className="w-5 h-5" />
                    Details
                </button>
            </div>
        </div>
    );
}