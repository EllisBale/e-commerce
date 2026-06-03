
export const getPhones = async () => {
    const response = await fetch(
        "https://dummyjson.com/products/category/smartphones"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch phones.")
    }

    return response.json();

};


export const getPhone = async (id) => {
    const response = await fetch(

    );
};