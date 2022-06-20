import React, { useEffect, useMemo, useState } from 'react'
import classes from './/ProductItem.module.css'
import catImage from '../../imeg/Photo.png'

const ProductItem = ({item})=>{
    const [selected, setSelected] = useState(false)
    const [available, setAvailable] = useState(false)
    const [stateProduct, setStateProduct] = useState(classes._ended)
    const [stateSpecification, setStateSpecification] = useState('')
    const [hoverBlcok, setHoverBlock] = useState('')

    const ended = classes._ended
    const select = classes._selected
    const hovBlock = classes._hovBlock
    
    const productItem_ended = classes.productItem_ended + ' ' + stateProduct + ' ' + hoverBlcok
    const productCard = classes.productCard + ' ' + stateProduct + ' ' + hoverBlcok
    const corner = classes.corner + ' ' + stateProduct + ' ' + hoverBlcok
    const weight = classes.weight + ' ' + stateProduct + ' ' + hoverBlcok
    const specification = classes.specification + ' ' + stateProduct

    const defaultSpecification = <span>Чего сидишь? Порадуй котэ, {<span onClick={click} className={classes.link}> купи</span>}{<span className={classes.point}>.</span>}</span>
    const selectedSpecification = <span>{item.info}</span>
    const endedSpecification = <span>{`Печалька, ${item.flavor} закончился.`}</span>
    const arrDescription = [...item.bundlDescription]


    

    function availableProduct() {
        if(!available){
            setStateProduct(ended)
            setStateSpecification(endedSpecification)
        } else {
            setStateProduct('')
            setStateSpecification(defaultSpecification)
        }
    }

    function selectedProduct(){
        if(selected){
            setStateProduct(select)
            setStateSpecification(selectedSpecification)
        } else {
            setStateProduct('')
            setStateSpecification(defaultSpecification)
        }

    }

    function click(){
        if(available && !selected){
            setSelected(true)
            setHoverBlock(hovBlock)
        } else if(available && selected){
            setSelected(false) 
            setHoverBlock('')
        }
    }

    function mouseOut(){
        console.log('mouseOut')
        setHoverBlock('')
    }

    useEffect(() => {
        
        availableProduct()
             
    },[available])

    useEffect(() =>{
        
    })

    useMemo(() => {
        setAvailable(item.endedProduct())
    },[item.quantity])

    useMemo(() => {
        selectedProduct()
    },[available, selected])
    
    return(
        <div className={classes.productItem}>
            
                <div  onClick={click} key={item.id} className={productItem_ended} onMouseOut={mouseOut}></div>
                <div className={corner}></div>
                    <div  className={productCard}>
                    
                        <span className={classes.title}>Сказочное заморское яство</span>
                        <span className={classes.nameProduct}>{item.nameProduct}</span>
                        <span className={classes.flavor}>{item.flavor}</span>
                        <div className={classes.description}>
                        {arrDescription.map((items)=>
                            <span key={Math.random()} className={classes.description__text}>{items}</span>
                        )}</div>
                        <div className={weight}>
                            <span className={classes.weight__numb}>{item.weight}</span> 
                            <span className={classes.weight__text}>кг</span>
                        </div>
                    <img className={classes.product__image} src={catImage} alt='product image' />
                    </div>
                    
                <div className={specification}>{stateSpecification}</div>
        </div> 
    )
}
export default ProductItem