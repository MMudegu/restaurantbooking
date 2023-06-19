import { createContext,useContext, useState } from "react";
import {dishes} from '../Components/MenuJS/dishes'

const menuItemsContext = createContext(undefined);

export default function MenuItemsProvider({children}){
    //This state will store the key and number of times an item is selected at the AddItemToCart component
    const [noOfItemSelected,setNoOfItemSelected] = useState([]);
    const [totalDishesSelected,setTotalDishesSelected]= useState();
    const [typeOfFood,setTypeOfFood] = useState();

    return <menuItemsContext.Provider 
                value={{noOfItemSelected,setNoOfItemSelected,dishes,totalDishesSelected,setTotalDishesSelected,typeOfFood,setTypeOfFood}}>
                    {children}
            </menuItemsContext.Provider>
}

export const useMenuItemsContext = ()=>useContext(menuItemsContext);