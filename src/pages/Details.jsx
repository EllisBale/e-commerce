import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {

     const [phone, setPhone] = useState(null);

     const { id } = useParams();

    const fetchPhones = async () => {
            try {

                const endpoint = `https://dummyjson.com/products/${id}`;

                const response = await fetch(endpoint)

                if (!response.ok) {
                    throw new Error("Failed to fetch smartphones.");
                }
                
                const data = await response.json();
                
                setPhone(data);
                
            } catch (e) {
                console.error("Error fetching smartphones:", e);
            }
    };

    useEffect(() => {
        fetchPhones();
    }, [id] )


    if (!phone) return <p className="mt-[80px]">Loading...</p>
    

    return (
        <div className="my-[80px] flex justify-center">
            <div key={phone.id} className="flex flex-col lg:flex-row gap-1 w-full">
                <div className="lg:w-1/2">
                    <img src={phone.images[0]} alt={phone.title} className="object-cover"/>
                </div>
                <div className="lg:w-1/2 flex flex-col">
                    <h1 className="text-center text-4xl font-bold text-shadow-white-950 my-5">{phone.title}</h1>
                    <p className="text-xl text-center p-10">{phone.description}</p>
                    <button className="cursor-pointer mx-auto min-w-50  text-white bg-gradient-to-br from-purple-600 rounded-full py-4 m to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-2 py-2.5 text-center leading-5">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;