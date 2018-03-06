import * as types from './action-types';
import axios from 'axios';


export const addPerson = () => {
        return dispatch => {
             axios.get(`http://599be4213a19ba0011949c7b.mockapi.io/cart/Cart`).then(response => {
                if(response) {
                  console.log("respomnse",response)
                  if(response.data) {
                    dispatch({ type: types.GET_CART_COMPLETED, updatePayload: response });
                  }
                } else {
                  dispatch({ type: types.GET_CART_REJECTED, updatePayload: response });
                }
              }).catch(error => {
                dispatch({ type: types.GET_CART_REJECTED  , updatePayload: error });
              });
        }
}
