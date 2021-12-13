import { useReducer } from "react";
import axios from 'axios';
import showsContext from "./showsContext";
import showsReducer from './showsReducer';
import {
    SEARCH_SHOWS,
    SET_LOADING,
    SET_SINGLE_SHOW,
    CLEAR_SINGLE_SHOW
} from '../types'

const ShowsState = (props) => {
    const initialState = {
        shows: [],
        singleShow: {},
        loading: false
    }

    const [state, dispatch] = useReducer(showsReducer,initialState)

    const searchShows = async(search) => {
        dispatch({type: SET_LOADING})

        const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`)
        
        dispatch({
            type: SEARCH_SHOWS,
            payload: data
        });
    }

    const getSingleShow = async (id) => {
        dispatch({
            type: SET_LOADING,
        })

        const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);

        console.log(data)
        
        dispatch({
            type: SET_SINGLE_SHOW,
            payload: data
        })
    }

    const clearSingleShow = () => {
        dispatch({
            type: CLEAR_SINGLE_SHOW
        })
    }

    return ( 
        <showsContext.Provider
            value={{
                shows : state.shows,
                singleShow: state.singleShow,
                loading: state.loading,
                searchShows,
                getSingleShow,
                clearSingleShow
            }}
        >
            {props.children}
        </showsContext.Provider>
     );
}
 
export default ShowsState;