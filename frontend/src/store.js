import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'


const middleware=[];

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 

  let store = createStore(persistedReducer, composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  ))
  let persistor = persistStore(store)

  export { store, persistor };

