import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import CCSaga from "./CC.Saga";
import CCReducer from "./CC.Reducer";

const SagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: CCReducer,
  middleware: [SagaMiddleware],
  devTools: true,
});

SagaMiddleware.run(CCSaga);

export default Store;
