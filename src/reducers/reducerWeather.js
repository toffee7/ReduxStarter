import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log('Action required', action);
  switch(action.type) {
    case FETCH_WEATHER:
    // return new instance of state always, never manipulate state directly
    // return state.concat([action.payload.data]);
    return [ action.payload.data, ...state ];
  }
  return state;
}
