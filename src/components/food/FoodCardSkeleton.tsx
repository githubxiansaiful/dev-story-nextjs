// components/FoodCardSkeleton.tsx
export default function FoodCardSkeleton() {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-800 animate-pulse">
            {/* Image Skeleton */}
            <div className="h-52 bg-gray-200 dark:bg-gray-700" />

            <div className="p-5 space-y-4">
                {/* Title Skeleton */}
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-4/5" />
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/5" />

                {/* Buttons Skeleton */}
                <div className="flex gap-3 pt-2">
                    <div className="flex-1 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl" />
                    <div className="flex-1 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl" />
                </div>
            </div>
        </div>
    );
}