import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../feature/todo/todoSclice"
export const store = configureStore({
    reducer: todoReducer
});