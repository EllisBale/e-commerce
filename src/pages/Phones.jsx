import { useEffect, useState } from "react";

const Phones = () => {

    const [phones, setPhones] = useState([]);

    const fetchPhones = async () => {
        try{
            const endpoint = "https://dummyjson.com/products/category/smartphones";

            const response = await fetch(endpoint)

            if (!response.ok) {
                throw new Error("Failed to fetch phones.")
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
    }, [] )


    return(
        <div className="mt-[80px] mb-[30px] mx-5 lg:mx-50">
            <div className="grid grid-cols-12 gap-4 text-center">
                {phones.map((phone) => (
                    <div key={phone.id} className="col-span-6 md:col-span-4 xl:col-span-3 bg-zinc-800 rounded-lg shadow-md p-4 cursor-pointer">
                        <img
                            src={phone.images[0]}
                            alt={phone.title}
                            draggable="false"
                            className="w-full h-100 sm:h-100 sm:w-100 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-center text-lg font-medium">{phone.title}</h3>
                        <p>£{phone.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Phones;