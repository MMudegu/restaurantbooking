import { useContext,createContext, useState } from "react";

const userAccountContext = createContext(undefined);

export default function UserAccountProvider({children}){
    const [userDetails,setUserDetails] = useState();
    const [userTableBooking,setUserTableBooking] = useState();

    return(
        <userAccountContext.Provider value={{userDetails,setUserDetails,userTableBooking,setUserTableBooking}}>
            {children}
        </userAccountContext.Provider>
    )
}

export const useUserAccountContext = ()=> useContext(userAccountContext);