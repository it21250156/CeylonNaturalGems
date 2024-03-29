import { createContext, useReducer } from "react";
import { usePaymentContext } from "../hooks/usePaymentsContext";

export const PaymentsContext = createContext()

export const paymentsReducer = (state , action ) => {
  switch (action.type) {
    
    case 'CREATE_PAYMENT' :
        return {
            payments: [action.payload, ...state.payments]
        }

    case 'SET_PAYMENTS' :
        return {
            payments: action.payload
        }    

    case 'DELETE_PAYMENT' :
        return{
            payments: state.payments?.filter((w) => w._id !== action.payload._id) || []

        }

    case 'UPDATE_PAYMENT' :
        return{
            payments: state.payments?.filter((w) => w._id !== action.payload._id) || []
        }    

    default:
        return state    
  }  
} 

export const PaymentsContextProvider = ({children}) => {
    
    const [state,dispatch] = useReducer(paymentsReducer, {
        payments:null
    })

    return (
        <PaymentsContext.Provider value={{...state, dispatch}}>
            {children}
        </PaymentsContext.Provider>
    )
}