import * as types from '../actions/action-types';

export default (state = [], action) => {

  switch (action.type) {
    case types.GET_CART_COMPLETED:
      return [...state, action.updatePayload.data];
    case types.GET_CART_REJECTED:
        return [...state, action.updatePayload.data];
    default:
      return state;
  }

  
};
