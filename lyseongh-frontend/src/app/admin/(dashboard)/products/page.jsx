"use client";

import { useState } from "react";
import { Plus, SearchIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const products = [
    {
        id: 1,
        name: '',
        category: '',
        image: '',
        description: '',
        inStock: true,
    },
];

const SearchFilter = ({ onSearch,  }) => {
    const [searchTerm, setSearchTerm] = useState("");


    const categories = [
        {
            id: "all",
            name: "All Products",
            count: products.length
        },
        {
            id: "CCTVs",
            name: "CCTVs",
            count: products.filter((p) => p.category === "CCTVs").length
        },
        {
            id: "ip-cameras",
            name: "Ip Cameras",
            count: products.filter((p) => p.category === "ip-cameras").length
        },
        {
            id: "digital-cameras",
            name: "Digital Cameras",
            count: products.filter((p) => p.category === "digital-cameras").length
        },
    ];

    const handleSearch = (value) => {
        setSearchTerm(value)
        onSearch(value)
    }

    return (
        <div className="bg-white p-4 rounded-md flex flex-wrap gap-4 items-center justify-between shadow-xs">
            <div className="bg-gray-100 flex flex-1 min-w-[250px] items-center gap-3 rounded-sm px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-1 transition-all">
                <SearchIcon className="text-gray-500" size={20} aria-hidden="true" />
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    className="outline-none border-none bg-transparent text-gray-700 w-full placeholder-gray-400"
                    aria-label="Search products"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>

            <div className="flex flex-wrap gap-3 items-center">

                <div className="min-w-[120px]">
                    <Select>
                        <SelectTrigger className="w-[120px] md:w-[300px] cursor-pointer">
                            <SelectValue placeholder="All products"/>
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((category) => (
                                <SelectItem key={category.id} value={category.id}>
                                    {category.name} ({category.count})
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <Button 
                    variant="default" 
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-sm px-4 py-2 flex items-center gap-2 transition-colors cursor-pointer"
                >
                    <Plus size={18} aria-hidden="true" />
                    <span>Add New Product</span>
                </Button>
            </div>
        </div>
    );
};


const page = () => {
  return (
    <div className="h-screen">
        <div className="px-4">
            <SearchFilter />
        </div>
    </div>
  )
}

export default page
