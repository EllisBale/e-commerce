import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPhones } from "../data/products";

const Phones = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        const fetchPhones = async () => {
            try {
                const data = await getPhones();
                setPhones(data.products);
            } catch (e) {
                console.error(e)
            }
        };
        fetchPhones();
    }, [] )

    return(
        <div className="mt-[80px] mb-[30px] mx-5 lg:mx-50">
            <div className="grid grid-cols-12 gap-4 text-center">
                {phones.map((phone) => (
                    <div key={phone.id} className="col-span-6 md:col-span-4 xl:col-span-3 bg-zinc-800 rounded-lg shadow-md p-4 cursor-pointer">
                        <Link to={`/phones/${phone.id}`}>
                        <img
                            src={phone.images[0]}
                            alt={phone.title}
                            draggable="false"
                            className="w-full h-100 sm:h-100 sm:w-100 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-center text-lg font-medium">{phone.title}</h3>
                        <p>£{phone.price}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Phones;