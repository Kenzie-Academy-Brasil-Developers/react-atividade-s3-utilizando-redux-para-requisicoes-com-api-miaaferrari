import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { digimonsReducer } from "./modules/digimons/reducers";

const reducers = combineReducers({digimons: digimonsReducer });

export const store = createStore(reducers, applyMiddleware(thunk));
