import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';


function* helloSaga() {
    console.log('Hello Sage');
}

export default function* rootSaga() {
    console.log("root saga"); 

    yield all([helloSaga(), counterSaga()]);
}