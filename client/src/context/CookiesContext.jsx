import { useCookies } from "react-cookie";

import { useContext, createContext } from "react";


const CookiesContext = createContext();


export const handleCookies = () => {
    return useContext(CookiesContext);
}


export const CookiesHandler = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['User']);

    const setUserCookie = (user) => {
        setCookie('User', user, {path: '/'});
    }

    const removeUserCookie = () => {
        removeCookie('User');
    }


    const cookiesHandlerValue = {
        cookies,
        setCookie,
        removeCookie,
        setUserCookie,
        removeUserCookie
    }


    return (
        <CookiesContext.Provider value={cookiesHandlerValue}>
            {children}
        </CookiesContext.Provider>
    )

    
}