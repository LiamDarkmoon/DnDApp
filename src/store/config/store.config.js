import createSagamiddleware from 'redux-saga'
import { rootreducer } from "../reducers/RootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { watcherSaga } from '../sagas/Sagas';


const sagaMiddleware = createSagamiddleware()

const createAppStore = configureStore({
    reducer: rootreducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)});

    sagaMiddleware.run(watcherSaga);

    export default createAppStore;