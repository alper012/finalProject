import {Points as types} from '../types';
import {Points as initials} from '../initials';

export default function Reducers(state = initials, action: any) {
  switch (action.type) {
    //** SUCCESS ************************ **/
    case `${types.ACTS.CREATE}_SUCCESS`:
      return {
        ...state,
        points: [...state.points, action?.payload],
        CustomID: Math.random(),
      };

    case `${types.ACTS.UPDATE}_SUCCESS`:
      return {
        ...state,
        points: state.points.map((point: any) =>
          point.id === action?.payload?.id ? action?.payload : point,
        ),
        CustomID: Math.random(),
      };

    case `${types.ACTS.UPDATE_REDUCER}_SUCCESS`:
      return {
        ...state,
        [action?.payload?.name]: action?.payload?.data,
        CustomID: Math.random(),
      };

    case `${types.ACTS.RESET}_SUCCESS`:
      return {
        ...initials,
        CustomID: Math.random(),
      };

    default:
      return state;
  }
}
