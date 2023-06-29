import { createContext,useContext, useState } from "react";
import {dishes} from '../Components/MenuJS/dishes'

const menuItemsContext = createContext(undefined);

export default function MenuItemsProvider({children}){
    //This state will store the dishes property key and number of times an item is selected at the AddItemToCart component
    const [noOfItemSelected,setNoOfItemSelected] = useState([]);
    //This state will store an array of how many times a dish is selected
    //It is a one to one mapping of the type of food selected
    const [totalDishesSelected,setTotalDishesSelected]= useState([]);
    const [typeOfFoodSelected,setTypeOfFoodSelected] = useState([]);

    const [totalAmount,setTotalAmount] = useState([]);
    return <menuItemsContext.Provider 
                value={{noOfItemSelected,setNoOfItemSelected,dishes,totalDishesSelected,setTotalDishesSelected,
                        typeOfFoodSelected,setTypeOfFoodSelected,totalAmount,setTotalAmount}}>
                    {children}
            </menuItemsContext.Provider>
}

export const useMenuItemsContext = ()=>useContext(menuItemsContext);