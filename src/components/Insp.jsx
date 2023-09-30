export function Insp(){
    const categories = ["Popular", "Arts & culture", "Outdoors", "Mountains", "Beach", "Unique stays", "Categories", "Things to do", "Airbnb-friendly apartments"];
    const activeCategory = "Popular"; 

    const subcategories = ["Canmore", "Benalmadena", "Marbella", "Mijas", "Prescott", "Scottsdale", "Tucson", "Jasper", "Mountain View", "Devonport", "Mallacoota", "Ibiza", "Anaheim", "Monterey", "Paso Robles", "Santa Barbara", "Sonoma", "Show more"];

    const subItems = ["Chalet rentals", "Apartment rentals", "Beachfront rentals", "House rentals", "Rentals with pools", "Pet-friendly rentals", "Cabin rentals", "Vacation rentals", "Vacation rentals", "Pet-friendly rentals", "Apartment rentals", "Apartment rentals", "Bungalow rentals", "Cottage rentals","House rentals","BABY"];
    

    return(
        <>
            <div className="px-10 pt-14 mt-7 bg-gray-100">
                <h1 className="font-semibold text-2xl mb-3 text-gray-900">Inspiration for future getaways</h1>

                <div className="flex gap-5 border-b">
                    {categories.map((category, index) => (
                        <div key={index} className={`pb-1 ${category === activeCategory ? 'border-gray-900 border-b-2' : 'border-transparent'}`}>
                            <h4 
                                className={`font-semibold cursor-pointer py-2 ${category === activeCategory ? 'text-gray-900' : 'text-gray-500'}`}
                            >
                                {category}
                            </h4>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-6 gap-2 pt-4 pb-14">
                    {subcategories.map((subcategory, index) =>(
                        <div key={index} className="font-medium p-2 text-gray-900 bg-pink-500">
                            {subcategory}
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}
