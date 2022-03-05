import { SET_UID } from './action'
import { userState } from './state'

export default function userInfo(state = userState, action) {

  switch (action.type) {
    case SET_UID:
      return {
        ...state,
        uid: action.uid,
      };
    default: 
      return state;
  }
  
}
