import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import rootReducer from './store';

const Store = createStore(rootReducer, compose(applyMiddleware(thunk)));
const Persistor = persistStore(Store);
export {Store, Persistor};
