/* eslint-disable prettier/prettier */
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { patientReducer } from "./reducers/patientReducer";
const AllReducers = combineReducers({
    patientReducer: patientReducer,
});
export const store = createStore(
    AllReducers,
    compose(
        applyMiddleware(thunk),
    )
);