import { useState } from 'react';
import '../../Styling/MenuCSS/AddItemToCart.css'
import { useMenuItemsContext } from '../../Context/MenuItemsContext';

export default function AddToCart({dbKey}){
    const [buttonClass,setButtonClass] = useState('Green');
    const {noOfItemSelected,setNoOfItemSelected} = useMenuItemsContext();

    //The states prefixed by local are used for state management only inside this component
    const [localItemSelected,setLocalItemSelected] = useState(false);
    const [localNoOfItemSelected,setLocalNoOfItemSelected] = useState(0);

    const ItemSelection= ()=>{
        if(localItemSelected){
            setButtonClass('Green')
            setLocalItemSelected(false);
        }
        else if(!localItemSelected){
            setButtonClass('Red')
            setLocalItemSelected(true);
        }
    }
     const ItemIncrease = ()=>{
        if(localItemSelected)
        {
            if(localNoOfItemSelected>=0)
            {
                setLocalNoOfItemSelected(localNoOfItemSelected + 1);

                //The Local state is used to set the global state noOfItemSelected which has been shared via MenuItemsContext
                //A dbKey which is part of the dishes data is prefixed to the array for easy data retrieval
                setNoOfItemSelected([...noOfItemSelected,`${dbKey} ${localNoOfItemSelected + 1}`]);
            }
        }
        else if(!localItemSelected)
        {
            alert('Please select item on the left before proceeding to adding or subtracting the number');
        }
     }

     const ItemDecrease = ()=>{
        if(localItemSelected)
        {
            if(localNoOfItemSelected>0)
            {
                setLocalNoOfItemSelected(localNoOfItemSelected - 1);

                //The Local state is used to set the global state noOfItemSelected which has been shared via MenuItemsContext
                //A dbKey which is part of the dishes data is prefixed to the array for easy data retrieval
                setNoOfItemSelected([...noOfItemSelected,`${dbKey} ${localNoOfItemSelected - 1}`]);
            }
        }
        else if(!localItemSelected)
        {
            alert('Please select item on the left before proceeding to adding or subtracting the number');
        }
     }
    return(
        <div className='AddToCart'>
            <h2>Add Item :&ensp;<button className= {buttonClass} onClick={ItemSelection}>{localItemSelected?<h2>-</h2>:<h2>+</h2>}</button></h2>
            <button className='RemoveFoodItem' onClick={ItemDecrease}><h2>-</h2></button>
            <div className='DisplayNumber'><h2>{localNoOfItemSelected}</h2></div>
            <button className='AddFoodItem' onClick={ItemIncrease}><h2>+</h2></button>
        </div>
    );
}