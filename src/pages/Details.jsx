import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPhones } from "../data/products";


const Details = () => {

    const { id } = useParams();

    const [phone, setPhone] = useState(null);

    useEffect(() => {
        const fetchPhone = async () => {
        try {
            const data = await getPhones(id);
            setPhone(data);
        } catch (e) {
            console.error(e)
        }};


    }, [id] );

    return (
        <div className="mt-[80px]">
            test
        </div>
    );
};

export default Details;