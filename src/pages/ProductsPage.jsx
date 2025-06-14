import React from 'react'
import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import DynamicDropdown from '../Components/DynamicDropdown';
  const products = [
        {
            id: 1,
            name: 'Athletic Shoes',
            price: 2000,
            category: 'FootWear',
            rating: 8.5,
            image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86',
        },
        {
            id: 2,
            name: 'SunGlasses',
            price: 600,
            category: 'Accesory',
            rating: 7.5,
            image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4',
        },
        {
            id: 3,
            name: 'Hand Bag',
            price: 5000,
            category: 'Accesory',
            rating: 7.0,
            image: 'https://images.unsplash.com/photo-1560155136-ca9fd0b25a4c',
        },

        {
            id: 4,
            name: 'Wall Hanger',
            price: 2500,
            category: 'Furniture',
            rating: 6.5,
            image: 'https://www.yankodesign.com/images/design_news/2023/04/top-10-desk-designs-every-workaholic-needs-to-amp-up-their-productivity/Top-10_work-desks_folding_yankodesign_hero.jpg',
        },
        {
            id: 5,
            name: 'Easy Chair',
            price: 6000,
            category: 'Furniture',
            rating: 8.0,
            image: 'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?cs=srgb&dl=pexels-pixabay-276534.jpg',
        },
        {
            id: 6,
            name: 'Sofa',
            price: 10000,
            category: 'Furniture',
            rating: 7.5,
            image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg',
        },
        {
            id: 7,
            name: 'Dates',
            price: 400,
            category: 'Food',
            rating: 4.3,
            image: 'https://images.pexels.com/photos/20106286/pexels-photo-20106286/free-photo-of-dry-dates-in-table.jpeg',
        },
        {
            id: 8,
            name: 'Egg',
            price: 200,
            category: 'Food',
            rating: 4.0,
            image: 'https://cdn.pixabay.com/photo/2019/03/16/23/08/egg-4059957_1280.jpg',
        },
        {
            id: 9,
            name: 'Honey',
            price: 500,
            category: 'Food',
            rating: 4.5,
            image: 'https://cdn.pixabay.com/photo/2024/09/20/13/10/local-honey-9061428_640.png',
        }
        // Add more products...        
    ];

     const categories = [... new Set(products.map(p => p.category))] // distinct categories
    const categoryList = categories.map(category =>
        ({ value: category, label: category })
    )
    const sortByList = [
        { value: "Category", label: "Category" },
        { value: "Name", label: "Name" },
        { value: "Price", label: "Price" },
    ]

function ProductsPage() { 
    const [productList, setProductList] = useState(products);   
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedName, setSelectedName] = useState("")
    const [sortType, setsortType] = useState("")

    function searchProductsByCategory(selectedItem) {
        setSelectedCategory(selectedItem)
        getProducts(selectedItem, selectedName)
    }

    function searchProductByName(event) {
        setSelectedName(event.target.value)
        getProducts(selectedCategory, event.target.value)
    }

    function getProducts(category, name) {
        let selectedProducts = []
        if (category != "" && name != "") {
            selectedProducts = (products.filter(product =>
                product.name.toLowerCase().includes(name.toLowerCase())
                && product.category == category))
        } else if (category != "") {
            selectedProducts = (products.filter(product => product.category == category))
        } else if (name != "") {
            selectedProducts = (products.filter(product => product.name.toLowerCase().includes(name.toLowerCase())))
        }
        else {
            selectedProducts = (products)
        }
        setProductList(selectedProducts) 

        sortProducts(selectedProducts, sortType)
    }

    function sortProductList(selectedType) {
        setsortType(selectedType)
        let productsToSort = [...productList]
        sortProducts(productsToSort, selectedType)
        setProductList(productsToSort)
    }

    function sortProducts(productsToSort, selectedType) {
        switch (selectedType) {
            case "Category": {
                productsToSort.sort((a, b) => {
                    if (a.category.toLowerCase() < b.category.toLowerCase()) return -1
                    if (a.category.toLowerCase() > b.category.toLowerCase()) return 1
                })
                break;
            }
            case "Price": {
                productsToSort.sort((a, b) => {
                    if (a.price < b.price) return -1
                    if (a.price > b.price) return 1
                })
                break;
            }
            case "Name": {
                productsToSort.sort((a, b) => {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                })
                break;
            }
        }
    }

    return (
        <div className="">
            <div className="mt-3 flex justify-center mb-5">
              <h3 className='text-2xl text-center italic font-bold text-blue-700'>One Destination. Countless Possibilities.</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  border align-middle rounded bg-blue-900 justify-center mb-8 mx-8 p-4 ">
                <div className="w-full md:w-1/2 mx-auto md:p-0 p-2">
                    <DynamicDropdown item={categoryList} onData={searchProductsByCategory} name='Select Category' />
                </div>
                <div className="w-full md:w-3/4 mx-auto md:p-0 p-2">
                    <input type="text" name="search" value={selectedName} className="w-full md:w-3/4" id="search" placeholder="Search By Name" onChange={searchProductByName} />
                </div>
                <div className="w-full md:w-1/2 mx-auto md:p-0 p-2">
                    <DynamicDropdown item={sortByList} onData={sortProductList} name='Sort By' />
                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center md:justify-between mx-6 p-2 mt-6">
                {
                    productList.map(item => { return <ProductCard key={item.id} item={item} /> })
                }

            </div>
        </div>
    )
}
export default ProductsPage