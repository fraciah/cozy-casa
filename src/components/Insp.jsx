export function Insp(){
    const categories = ["Popular", "Arts & culture", "Outdoors", "Mountains", "Beach", "Unique stays", "Categories", "Things to do", "Airbnb-friendly apartments"];
    const activeCategory = "Popular"; 

    return(
        <>
            <div className="px-10 py-14 mt-7 bg-gray-100">
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
            </div>
        </>
    )
}
