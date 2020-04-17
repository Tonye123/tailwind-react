import { useEffect } from 'react';
import { useAppState } from './AppContext';
import { BOOKS } from './data/books'


//pull from local storage
export default function useLocal(){
    let[state, dispatch ] = useAppState();
    useEffect(() => {
        dispatch({
            type: "GET_FROM_LOCAL_STATE",
            toRead: localStorage.getItem("to_read_list") || BOOKS,
            toComplete: localStorage.getItem("completed_list") || []

        })
    },[])



}