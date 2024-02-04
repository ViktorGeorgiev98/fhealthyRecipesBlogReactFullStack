import { createContext, useContext, useState, useEffect } from "react";


const ErrorContext = createContext();

export const handleError = () => {
    return useContext(ErrorContext);
}


export const ErrorHandler = ({ children }) => {
    const [error, setError] = useState('');

    const errorHandlerValue = {
        error,
        setError,
    }

    return (
        <ErrorContext.Provider value={errorHandlerValue}>
            {children}
        </ErrorContext.Provider>
    )
}