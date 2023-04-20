import jobSlice from './jobSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  jobSlice,
});

export default configureStore({ reducer: rootReducer });
