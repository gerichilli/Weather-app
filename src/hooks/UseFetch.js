import axios from "axios"
import { useReducer, useEffect } from 'react'

const reducer = (state, action) => {
    switch(action.type) {
        case "loading": 
            return { response: undefined, isLoading: true, error: undefined }
        case "success": 
            return { response: action.payload, isLoading: false, error: undefined }
        case "error": 
            return { response: undefined, isLoading: false, error: action.payload }
        default:
            return { response: undefined, isLoading: false, error: "Invalid action" }
    }
}

const UseFetch = (url, config) => {
    const initialState = {
        response: undefined,
        isLoading: false,
        error: undefined
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({type: "loading"})
        console.log(url);
        async function fetchData() {
            try {
                const res = await axios(url, config)
                dispatch({type: "success", payload: res})
            } catch(error) {
                dispatch({type: "error", payload: "Sorry we couldn't find your city. Please confirm and try again."})
            } 
        }
        
        fetchData();
    }, [url, config])

    return state;
}

export default UseFetch
