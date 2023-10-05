import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export function Insp(){
    const categories = ["Popular", "Arts & culture", "Outdoors", "Mountains", "Beach", "Unique stays", "Categories", "Things to do", "Airbnb-friendly apartments"];
    const activeCategory = "Popular"; 

    const subcategories = ["Canmore", "Benalmadena", "Marbella", "Mijas", "Prescott", "Scottsdale", "Tucson", "Jasper", "Mountain View", "Devonport", "Mallacoota", "Ibiza", "Anaheim", "Monterey", "Paso Robles", "Santa Barbara", "Sonoma", "Show more"];

    const subItems = ["Chalet rentals", "Apartment rentals", "Beachfront rentals", "House rentals","House rentals", "Rentals with pools", "Pet-friendly rentals", "Cabin rentals", "Vacation rentals", "Vacation rentals", "Pet-friendly rentals", "Apartment rentals", "Apartment rentals", "Bungalow rentals","House rentals", "Cottage rentals","House rentals"];
    
    const support = ["Support","Help Center","AirCover","Anti-discrimination","Disability support","Cancellation options","Report neighborhood concern"];
    const hosting = ["Hosting","Airbnb your home","AirCover for Hosts","Hosting resources","Community forum","Hosting responsibly","Airbnb-friendly apartments"];
    const airbnb = ["Airbnb","Newsroom","New features","Careers","Investors","Gift cards","Airbnb.org emergency stays"];

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft -= 200;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft += 200;
    }

    return(
        <>
        <div className="border-b">
            <div className="sm:px-10 px-5 pt-14 mt-7 bg-gray-100">
                <h1 className="font-semibold text-xl sm:text-2xl mb-3 text-gray-900">Inspiration for future getaways</h1>

                <div className="flex items-center">
                    <MdChevronLeft onClick={slideLeft} className="cursor-pointer lg:hidden" size={40}/>
                    <div id="slider" className="flex gap-6 sm:gap-5 border-b overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                        {categories.map((category, index) => (
                            <div key={index} className={`pb-1 ${category === activeCategory ? 'border-gray-900 border-b-2' : 'border-transparent'}`}>
                                <h4 
                                    className={`font-semibold sm:text-base text-sm cursor-pointer py-2 ${category === activeCategory ? 'text-gray-900' : 'text-gray-500'}`}
                                >
                                    {category}
                                </h4>
                            </div>
                        ))}
                    </div>
                    <MdChevronRight onClick={slideRight} className="cursor-pointer lg:hidden" size={40}/>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-8 pb-14">
                    {subcategories.map((subcategory, index) =>(
                        <div key={index} className="cursor-pointer">
                            <div className={`font-medium text-gray-900 ${subcategories[index] === subcategories[subcategories.length - 1]? 'hover:underline': ''}`}>{subcategory}</div>
                            <div className="text-gray-500">{subItems[index] ? subItems[index] : ''}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-100">
            <div className="py-6 sm:py-10 border-b md:border-b-0">
                {support.map((item, index) => (
                    <div key={index} className="px-6 sm:px-10">
                        <h5 className={`py-1 cursor-pointer ${index === 0? 'text-gray-900 font-semibold' : 'text-gray-700 hover:underline'}`}>{item}</h5>
                    </div>
                ))}
            </div>
            <div className="py-6 sm:py-10 border-b md:border-b-0">
                {hosting.map((item, index) => (
                    <div key={index} className="px-6 sm:px-10">
                        <h5 className={`py-1 cursor-pointer ${index === 0? 'text-gray-900 font-semibold' : 'text-gray-700 hover:underline'}`}>{item}</h5>
                    </div>
                ))}
            </div>
            <div className="py-6 sm:py-10">
                {airbnb.map((item, index) => (
                    <div key={index} className="px-6 sm:px-10">
                        <h5 className={`py-1 cursor-pointer ${index === 0? 'text-gray-900 font-semibold' : 'text-gray-700 hover:underline'}`}>{item}</h5>
                    </div>
                ))}
            </div>

        </div>
        </>
    )
}
