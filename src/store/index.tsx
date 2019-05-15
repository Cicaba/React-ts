import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { enthusiasm } from './reducer/index';


//redux数据持久化
let config = {
  key: 'auto',
  storage,
  blacklist: ['audio']
}

let persistedReducer = persistReducer(config, enthusiasm);
export const store = createStore(persistedReducer, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});