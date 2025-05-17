import React, { createContext, useContext, useReducer, useState,useEffect } from 'react';

const DataProvider = createContext();
export const useData = () => useContext(DataProvider);

const initialState = {
    description: '',
    amountSpent: '',
    category: '',
    plannedBudget: '',
};

function dataReducer(state, action) {
    switch (action.type) {
        case 'SET_CATEGORY':
            return { ...state, category: action.payload };
            case 'SET_PLANNED_BUDGET':
                return { ...state, plannedBudget: action.payload };
        case 'SET_DESCRIPTION':
            return { ...state, description: action.payload };
        case 'SET_AMOUNT_SPENT':
            return { ...state, amountSpent: action.payload };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

export const Dataprovider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);
    const [expense,setExpense] =useState([])
    const [budget,setBudget] =useState([])
    // console.log(data)
    useEffect(() => {
    console.log('Expense Data Updated:', expense);
    console.log('Budget Data Updated:', budget);
    }, [expense,budget]);

    return (
        <DataProvider.Provider value={{ state, dispatch,setExpense,expense,setBudget,budget }}>
            {children}
        </DataProvider.Provider>
    );
};
