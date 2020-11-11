import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { enthusiasm } from './reducer/index';
import state from "./state/state"

//redux数据持久化
let config = {
  key: 'auto',
  storage,
  blacklist: ['audio'] //黑名单
}

let persistedReducer = persistReducer(config, enthusiasm);
export const store = createStore(persistedReducer, state);