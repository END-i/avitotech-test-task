import React, { useReducer, useContext, createContext } from "react";

import { IInitialState, IDispatch, IProviderProps, IType } from "common/types";

let reducer = (state: IInitialState, { type, value }: IDispatch) => {
  return { ...state, [type]: value };
};

const initialState: IInitialState = {
  loading: false,
  errors: "",
  imageId: null
};

const DispatchContext = createContext((type: IType, value: any) => {});
const StateContext = createContext<IInitialState>(initialState);

const Provider: React.FC<IProviderProps> = ({ children }): JSX.Element => {
  const [state, _dispatch] = useReducer(reducer, initialState);
  const dispatch = (type: IType, value: any) => _dispatch({ type, value });

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

const useDispatch = () => useContext(DispatchContext);
const useGlobalState = () => useContext(StateContext);

export { Provider, useDispatch, useGlobalState };
