import { createContext,useContext, useState } from "react";
import {dishes} from '../Components/MenuJS/dishes'

const menuItemsContext = createContext(undefined);

export default function MenuItemsProvider({children}){
    const [itemSelected,setItemSelected] = useState(false);
    const [noOfItemSelected,setNoOfItemSelected] = useState(0);

    return <menuItemsContext.Provider 
                value={{itemSelected,setItemSelected,noOfItemSelected,setNoOfItemSelected,dishes}}>
                    {children}
            </menuItemsContext.Provider>
}

export const useMenuItemsContext = ()=>useContext(menuItemsContext);