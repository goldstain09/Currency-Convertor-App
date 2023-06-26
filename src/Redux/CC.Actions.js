import {  CONVERTING_ON_INPUT_ERROR, CONVERTING_ON_INPUT_START, CONVERTING_ON_INPUT_SUCCESS, GET_ALL_CURRENCY_DATA_ERROR, GET_ALL_CURRENCY_DATA_START, GET_ALL_CURRENCY_DATA_SUCCESS, SELECTING_ERROR1, SELECTING_START1, SELECTING_SUCCESS1 } from "./CC.Consonants";

// it's for getting data from an api...
const getData = async () => {
    let response = await fetch('https://v6.exchangerate-api.com/v6/8fd95064ff7ac1a2d34d064f/latest/USD')
    let data = await response.json();
    let dataIN_array = Object.entries(data.conversion_rates);
    return dataIN_array;
}

export const getAllCurrencyDataStart = () => {
    const get = getData()
    return {
        type: GET_ALL_CURRENCY_DATA_START,
        payload: get
    }
}

export const getAllCurrencyDataSuccess = (data) => ({
    type: GET_ALL_CURRENCY_DATA_SUCCESS,
    payload: data
})

export const getAllCurrencyDataError = (error) => ({
    type: GET_ALL_CURRENCY_DATA_ERROR,
    payload: error
})


// SELECTING CURRENCY

export const selectingStart1 = (data) => {
    return {
        type: SELECTING_START1,
        payload: data
    }
}

export const selectingSuccess1 = (data) => ({
    type: SELECTING_SUCCESS1,
    payload: data
})

export const selectingError1 = (error) => ({
    type: SELECTING_ERROR1,
    payload: error
})


