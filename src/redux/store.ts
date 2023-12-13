import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

import {Points as points_reducer} from './reducers';

const rootreducer = combineReducers({
  points_reducer: persistReducer(
    {key: '@points', storage: AsyncStorage},
    points_reducer,
  ),
});

export default rootreducer;
