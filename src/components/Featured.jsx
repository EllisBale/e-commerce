import { useEffect, useState } from "react";


const Featured = () => {

    const [phones, setPhones] = useState([]);


    const fetchPhones = async () => {
        try {
            const endpoint = 'https://dummyjson.com/products/category/smartphones';

            const response = await fetch(endpoint)
            
            if (!response.ok) {
                throw new Error("Failed to fetch products.");
            }

            const data = await response.json();
            console.log(data);

            setPhones(data.products);

        } catch (e) {
            console.error("Error fetching phones:", e)
        }
    };

    useEffect(() => {
        fetchPhones();
    }, [])


    return (
        <div className="mx-auto flex flex-col justify-center my-10">
            <h2 className="text-center text-3xl font-semibold mb-6">Featured</h2>
            <ul className="flex flex-row gap-4 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-600 snap-x snap-mandatory animate-fadein cursor-pointer">
                {phones.slice(0,5).map((phone) => (
                <li
                    key={phone.id}
                    className="flex-shrink-0 w-3/4 sm:w-1/3 bg-zinc-800 rounded-lg shadow-md p-4 flex flex-col items-center snap-start"
                >
                    <img
                    src={phone.images[0]}
                    alt={phone.title}
                    draggable="false"
                    className="w-full h-100 sm:h-100 sm:w-100 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-center text-lg font-medium">{phone.title}</h3>
                    <p>Price: {phone.price}</p>
                </li>
                ))}
            </ul>
    </div>
    );

};

export default Featured