import React, { useReducer } from 'react';

const ContextAvailablity = React.createContext(null);

const initlalState = {
    formData: null,
    data: null
}

function reducer(state, action) {
    switch (action.type) {
        case "SET_FORM_DATA":
            return {
                ...state,
                formData: action.formData
            }
        case "SET_API_RESPONSE":
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}

const ProviderAvailablity = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initlalState)

    return (
        <ContextAvailablity.Provider value={{ state, dispatch }}>
            {children}
        </ContextAvailablity.Provider>
    );
};

export { ProviderAvailablity, ContextAvailablity };