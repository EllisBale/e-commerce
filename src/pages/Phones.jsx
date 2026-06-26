import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Spinner from "../components/Spinner";
import Search from "../components/Search";


const Phones = () => {

    const [phones, setPhones] = useState([]);

    const [sortOrder, setSortOrder] = useState("default");

    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");

    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");


    const fetchPhones = async (query) => {
            try {

                const endpoint = query 
                ? `https://dummyjson.com/products/smartphone/search?q=${query}`
                : "https://dummyjson.com/products/category/smartphones/";

                const response = await fetch(endpoint)

                if (!response.ok) {
                    throw new Error("Failed to fetch smartphones.");
                }
                
                const data = await response.json();
                setPhones(data.products);
                setLoading(false);

            } catch (e) {
                console.error("Error fetching smartphones:", e);
            } finally {
                setLoading(false);
            }
    };

    useEffect(() => {

        const timerId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);

        }, 500);

        return () => {
            clearTimeout(timerId);
        };

    }, [searchTerm] );

    
    
useEffect(() => {
        fetchPhones(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    if (loading) {
            return (
                <Spinner />
            )
    }

    const filteredPhones = phones
        .filter((phone) =>  phone.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedAndFilteredPhones = sortOrder === "highest" 
    ? [...filteredPhones].sort((a, b) => (b.rating || 0) - (a.rating || 0))
    : filteredPhones;



 
    return(
        <div className="mt-[100px] mb-[30px] mx-2 lg:mx-50">
            <div className="flex flex-col lg:flex-row lg:justify-between mb-10">
                <h1 className="text-4xl font-bold text-shadow-white-950 mb-10">Explore Our Variety Of Smartphones</h1>
                <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
            </div>
             <button 
                onClick={() => setSortOrder(sortOrder === "default" ? "highest" : "default")}
                className="bg-purple-600 text-white px-4 py-2 mb-5 rounded-md hover:bg-purple-700 transition"
            >
                {sortOrder === "highest" ? "Sort: Highest Rating" : "Sort: Default"}
            </button>
            <div className="grid grid-cols-12 gap-4 text-center">
                {sortedAndFilteredPhones.length === 0 ? (
                <div className="flex flex-row col-span-12 justify-center">
                    <h2 className="text-xl font-bold text-shadow-white-950 mb-10">No Smartphones match Your Search.</h2>
                </div>
                ) : (
                    sortedAndFilteredPhones.map((phone) => (
                        <div key={phone.id} className="flex flex-col col-span-6 md:col-span-4 xl:col-span-3 bg-zinc-800 rounded-lg shadow-md p-10">
                            <motion.div
        
                                initial={{ opacity: 0, y: 50, x: -5 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 0.6 }} 
                                viewport={{once: true}}
                            >
                            <Link to={`/phones/${phone.id}`}>
                            <img
                                src={phone.images?.[0] ?? "image"}
                                alt={phone.title}
                                draggable="false"
                                className="w-full h-50 sm:h-100 sm:w-full object-cover rounded-md mb-4"
                            />
                            </Link>
                            <h3 className="text-center text-lg font-medium mb-2">{phone.title || "Phone"}</h3>
                            <p className="mb-2">⭐ {phone.rating}</p>
                            <p className="mb-5">£{phone.price}</p>
                            <Link to={`/phones/${phone.id}`} className="mt-auto block w-full text-white border border-white bg-transparent from-purple-400 rounded-full py-4  focus:ring-4  focus:ring-blue-300 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-2 py-2.5 text-center leading-5">
                            Buy
                            </Link>
                            </motion.div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
};
export default Phones;