import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { increment, incrementSaga, incrementSagaSuccess } from "./counterSlice";

export function* handleCounterSaga(action: PayloadAction<number>) {
    console.log('Wait for 1 second')

    yield delay(1000);
    console.log('Waiting is done !')

    yield put(incrementSagaSuccess(action.payload));

}

export default function* counterSaga() {
    console.log('counter saga');
    console.log(incrementSaga)

    yield takeEvery(incrementSaga, handleCounterSaga);
    // yield takeLatest(incrementSaga, handleCounterSaga);

}