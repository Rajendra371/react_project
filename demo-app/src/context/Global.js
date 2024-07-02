import React,{createContext} from "react";

export const GlobalContext=createContext()
const GlobalContextProvider=(props)=>{
    const student={
        fName : 'Rajendra',
        lName:'Shrestha',
        Address:'Dolakha'
    }
    return(
     <GlobalContext.Provider value={student}>
     {props.children}
     </GlobalContext.Provider>
    )
}
export default GlobalContextProvider