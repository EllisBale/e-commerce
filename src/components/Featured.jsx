import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Featured = () => {

    const [FeaturedPhones, setFeaturedPhones] = useState([]);


    const fetchFeaturedPhones = async () => {
        try {
            const endpoint = 'https://dummyjson.com/products/category/smartphones';

            const response = await fetch(endpoint)
            
            if (!response.ok) {
                throw new Error("Failed to fetch products.");
            }

            const data = await response.json();
            console.log(data);

            setFeaturedPhones(data.products);

        } catch (e) {
            console.error("Error fetching phones:", e)
        }
    };

    useEffect(() => {
        fetchFeaturedPhones();
    }, [])


    return (
        <>
        <div className="mx-auto flex flex-col justify-center my-10 lg:hidden">
            <h2 className="text-center text-3xl font-semibold mb-6">Featured</h2>
            <ul className="flex flex-row gap-4 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-600 snap-x snap-mandatory animate-fadein cursor-pointer">
                {FeaturedPhones.slice(0,5).map((phone) => (
                <li
                    key={phone.id}
                    className="flex-shrink-0 w-3/4 sm:w-1/3 bg-zinc-800 rounded-lg shadow-md p-4 flex flex-col items-center snap-start"
                >
                    <Link to={`/phones/${phone.id}`}>
                        <img
                        src={phone.images[0]}
                        alt={phone.title}
                        draggable="false"
                        className="w-full h-100 sm:h-100 sm:w-100 object-cover rounded-md mb-4"
                        />
                    </Link>
                    <h3 className="text-center text-lg font-medium">{phone.title}</h3>
                    <p className="mb-5">Price: {phone.price}</p>
                    <Link to={`/phones/${phone.id}`} className="mt-auto block w-full text-white bg-gradient-to-br from-purple-600 rounded-full py-4 m to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-2 py-2.5 text-center leading-5">
                        Buy
                    </Link>
                </li>
                ))}
            </ul>
        </div>

        <div className="hidden lg:flex  flex-col justify-center mx-10 my-10">
            <h2 className="text-center text-3xl font-semibold mb-8">Featured</h2>
            <ul className="grid grid-cols-4 gap-8 w-full">
                {FeaturedPhones.slice(0, 6).map((phone) => (
                <li
                    key={phone.id}
                    className="bg-zinc-800 rounded-lg shadow-md p-4 flex flex-col items-center"
                >
                    <Link to={`/phones/${phone.id}`}>
                        <img
                        src={phone.images[0]}
                        alt={phone.title}
                        draggable="false"
                        className="w-full h-full object-cover rounded-md mb-4"
                        />
                    </Link>
                    <h3 className="text-center text-lg font-medium">{phone.title}</h3>
                    <p className="mb-5">Price: {phone.price}</p>
                    <Link to={`/phones/${phone.id}`} className="mt-auto block w-full text-white bg-gradient-to-br from-purple-600 rounded-full py-4 m to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-2 py-2.5 text-center leading-5">
                           Buy
                    </Link>
                </li>
                ))}
            </ul>
        </div>
        </>


    );

};

export default Featured