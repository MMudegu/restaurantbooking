import { useState } from 'react';
import '../../Styling/MenuCSS/AddItemToCart.css'
import { useMenuItemsContext } from '../../Context/MenuItemsContext';

export default function AddToCart(){
    const [buttonClass,setButtonClass] = useState('Green');
    const {itemSelected,setItemSelected,noOfItemSelected,setNoOfItemSelected} = useMenuItemsContext();

    const ItemSelection= ()=>{
        if(itemSelected){
            setButtonClass('Green')
            setItemSelected(false);
        }
        else if(!itemSelected){
            setButtonClass('Red')
            setItemSelected(true);
        }
    }
     const ItemIncrease = ()=>{
        if(itemSelected)
        {
            if(noOfItemSelected>=0)
            {
                setNoOfItemSelected(noOfItemSelected + 1);
            }
        }
        else if(!itemSelected)
        {
            alert('Please select item on the left before proceeding to adding or subtracting the number');
        }
     }

     const ItemDecrease = ()=>{
        if(itemSelected)
        {
            if(noOfItemSelected>0)
            {
                setNoOfItemSelected(noOfItemSelected - 1);
            }
        }
        else if(!itemSelected)
        {
            alert('Please select item on the left before proceeding to adding or subtracting the number');
        }
     }
    return(
        <div className='AddToCart'>
            <h2>Add Item :&ensp;<button className= {buttonClass} onClick={ItemSelection}>{itemSelected?<h2>-</h2>:<h2>+</h2>}</button></h2>
            <button className='RemoveFoodItem' onClick={ItemDecrease}><h2>-</h2></button>
            <div className='DisplayNumber'><h2>{noOfItemSelected}</h2></div>
            <button className='AddFoodItem' onClick={ItemIncrease}><h2>+</h2></button>
        </div>
    );
}