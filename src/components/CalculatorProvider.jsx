import { createContext, useContext, useState } from 'react';

const CalculatorContext = createContext();

export const CalculatorProvider = ({children}) => {
    const [numbers, setNumbers] = useState([]);
    const saveNumbers = (newNumbers) => {
        setNumbers(newNumbers)
    }

    return (
        <CalculatorContext.Provider value={{numbers, saveNumbers}}>
            {children}
        </CalculatorContext.Provider>
    )
}

export const useNumbers = () => useContext(CalculatorContext);