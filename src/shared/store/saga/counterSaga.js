import {delay, takeLatest, put} from 'redux-saga/effects';
import {INCREMENT_COUNT, DECREMENT_COUNT} from '../action/actionType';

function* increaseCounterAsync() {
  try {
    yield delay(4000);
    yield put({
      type: 'INCREASE_COUNTER_ASYNC',
      value: 1,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* watchIncreaseCounter() {
  yield takeLatest(INCREMENT_COUNT, increaseCounterAsync);
}

function* decreaseCounter() {
  try {
    yield put({
      type: 'DECREASE_COUNTER',
      value: 1,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* watchDecreaseCounter() {
  yield takeLatest(DECREMENT_COUNT, decreaseCounter);
}
