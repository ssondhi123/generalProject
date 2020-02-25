import {INCREMENT_COUNT, DECREMENT_COUNT} from '../action/actionType';

const initialState = {
  count: 0,
};

function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREASE_COUNTER_ASYNC': {
      return {
        ...state,
        count: state.count + action.value,
      };
    }
    case 'DECREASE_COUNTER': {
      return {
        ...state,
        count: state.count - action.value,
      };
    }
    default:
      return state;
  }
}
export default CounterReducer;
