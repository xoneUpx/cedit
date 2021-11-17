import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import persistedReducer from '../persistConfig'
import  persistStore  from 'redux-persist/es/persistStore'
import { FLUSH, PAUSE, REGISTER, REHYDRATE, PERSIST, PURGE} from 'redux-persist/es/constants'

const ignoredActions = [FLUSH, REHYDRATE, PURGE, PERSIST, PAUSE, REGISTER]
const store = configureStore({
  reducer: {
    persistedReducer: persistedReducer,

  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions
    },

  })

  //devTools: process.env.NODE_ENV !== 'production',
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
export default store
