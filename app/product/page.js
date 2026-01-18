"use client";

import { useState, useEffect } from "react";

const Product = () => {
    const [products, setProducts] = useState([]);

    async function fetchData() {
        try {
            const response = await fetch("http://localhost:3000/api");
            const data = await response.json();
            console.log("Fetched Data:", data);
            
            setProducts(data.payload);
        } catch (error) {
            console.log("Failed to fetch data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Travel Places List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div 
                        key={product.place_id} 
                        className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition p-4"
                    >
                        <img 
                            src={product.place_image} 
                            alt={product.place_name} 
                            className="w-full h-80 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-2xl font-semibold mb-2">{product.place_name}</h2>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">ID: {product.place_id}</span>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default Product;
