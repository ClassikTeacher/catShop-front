import React, { useEffect, useState } from 'react'
import ProductService from '../service/ProductsServise'
import {Product} from '../models/Product.ts'
import ProductItem from './product-item/ProductItem'

const ProductBlock = ()=>{
    const [producs, setProducts] = useState([])
    const arrProducts = [{
        _id: "62acadd990e202408025c4dc",
        nameProduct: "Нямушка",
        flavor: "с фуа-гра",
        bundlDescription: [
            "10 порций",
            "мышь в подарок"
        ],
        weight: "0,5",
        info: "Печень утки разварная с артишоками.",
        quantity: 10,
    },
    {
        _id: "62acae5290e202408025c4de",
        nameProduct: "Нямушка",
        flavor: "с рыбкой",
        bundlDescription: [
            "40 порций",
            "мышь в подарок"
        ],
        weight: "2",
        info: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        quantity: 5,
    },
    {
        _id: "62af2b8b8b9b95ca22525c17",
        nameProduct: "Нямушка",
        flavor: "с курой",
        bundlDescription: [
            "100 порций",
            "мышь в подарок",
            "заказчик доволен"
        ],
        weight: "5",
        info: "Филе из цыплят с трюфелями в бульоне.",
        quantity: 0,
    }]

    async function fetchProducts(){
        try{
            // const response = await ProductService.fetchProducts()
            const arr = []
            arrProducts.map( item => 
                arr.push(new Product(item.nameProduct, item.flavor, item.bundlDescription, item.weight, item.info, item.quantity, item._id))
                )
            setProducts(arr)
            
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    return(
        <div className='product-block'>
            {producs
            ?  producs.map(item =>
              <ProductItem
                key={item.id}
                item={item}
               /> 
            )
            
            : <h1>Loading...</h1>
            }
        </div>
    )
}
export default ProductBlock