// import {configureStore} from '@reduxjs/toolkit'
// import userReducer from './Userslice'
// export default configureStore({
//     reducer:{
//         user:userReducer
//     }
// })
import { configureStore,combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './Userslice'
import productReducer from './Productslice'

const persistConfig = {
  key: 'Rijobatch',
  version: 1,
  storage,
}

const Rootreducer=combineReducers({user:userReducer,Product:productReducer})

const persistedReducer = persistReducer(persistConfig, Rootreducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById('root'),
// )