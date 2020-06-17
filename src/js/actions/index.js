import { ADD_SUPPLIER,TOGGLE_IS_LOGGED,UPDATE_CURRENTUSER,SET_MAINPAGE,SET_SELECTEDSUPPLIER,GETSUPPLIERS } from "../constants/action-types";
import axios from 'axios';

export function addSupplier(payload) {
    return { type: ADD_SUPPLIER, payload }
};
export function toggleIsLoggedIn(){
    return { type:TOGGLE_IS_LOGGED}
}
export function updateCurrentUser(payload){
    return { type:UPDATE_CURRENTUSER,payload}
}
export function setMainPageFunc(payload){
    return { type:SET_MAINPAGE,payload}
}
export function setSelectedSupplier(payload){
    return { type:SET_SELECTEDSUPPLIER,payload}
}
