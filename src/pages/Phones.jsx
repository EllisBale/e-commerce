import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Phones = () => {

    const [phones, setPhones] = useState([]);

    const fetchPhones = async () => {
            try {

                const endpoint = 'https://dummyjson.com/products/category/smartphones';

                const response = await fetch(endpoint)

                if (!response.ok) {
                    throw new Error("Failed to fetch smartphones.");
                }
                
                const data = await response.json();
                setPhones(data.products);

            } catch (e) {
                console.error("Error fetching smartphones:", e);
            }
    };

    useEffect(() => {
        fetchPhones();
    }, [] )


    if (!phones) return <p>Loading...</p>

    return(
        <div className="mt-[100px] mb-[30px] mx-2 lg:mx-50">
            <h1 className="text-4xl font-bold text-shadow-white-950 mb-10">Explore Our Variety Of Smartphones</h1>
            <div className="grid grid-cols-12 gap-4 text-center">
                {phones.map((phone) => (
                    <div key={phone.id} className="flex flex-col col-span-6 md:col-span-4 xl:col-span-3 bg-zinc-800 rounded-lg shadow-md p-10">
                        <Link to={`/phones/${phone.id}`}>
                        <img
                            src={phone.images?.[0] ?? "image"}
                            alt={phone.title}
                            draggable="false"
                            className="w-full h-50 sm:h-100 sm:w-full object-cover rounded-md mb-4"
                        />
                        </Link>
                        <h3 className="text-center text-lg font-medium mb-2">{phone.title}</h3>
                        <p className="mb-2">⭐ {phone.rating}</p>
                        <p className="mb-5">£{phone.price}</p>
                        <Link to={`/phones/${phone.id}`} className="mt-auto block w-full text-white bg-gradient-to-br from-purple-600 rounded-full py-4 m to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-2 py-2.5 text-center leading-5">
                           Buy
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Phones;