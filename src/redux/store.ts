import {configureStore} from "@reduxjs/toolkit";
import friendReducer from './friendReducer'

export default configureStore({
    reducer:{
        friendReducer:friendReducer
    },
})