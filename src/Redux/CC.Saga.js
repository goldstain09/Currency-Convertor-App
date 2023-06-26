import {delay, put, takeLatest} from 'redux-saga/effects';
import {  CONVERTING_ON_INPUT_START, GET_ALL_CURRENCY_DATA_START, SELECTING_START1 } from './CC.Consonants';
import { convertingError, convertingSuccess, getAllCurrencyDataError, getAllCurrencyDataSuccess, selectingError1, selectingSuccess1 } from './CC.Actions';


function* getAllCurrencyData({payload}){
    try {
        yield delay(2000);
        yield put(getAllCurrencyDataSuccess(payload));
    } catch (error) {
        yield put(getAllCurrencyDataError(error.message));
    }
}

function* selecting({payload}){
    try {
        yield delay(1500);
        yield put(selectingSuccess1(payload));
    } catch (error) {
        yield put(selectingError1(error));
    }
}

function* CCSaga(){
    yield takeLatest(GET_ALL_CURRENCY_DATA_START,getAllCurrencyData);
    yield takeLatest(SELECTING_START1,selecting);

}

export default CCSaga;