import React, { createContext, Dispatch, ReactNode } from 'react';
import {
  GlobalActions,
  globalReducer,
  initialState,
  StateType,
} from 'reducers/globalReducer';
import { useLocallyPersistedReducer } from 'utils/useLocallyPersistedReducer';

type Settings = {
  state: StateType;
  dispatch: Dispatch<GlobalActions>;
};

const GlobalReducerContext = createContext<Settings>({} as Settings);

const GlobalReducerContextProvider: React.FC<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  const [state, dispatch] = useLocallyPersistedReducer(
    globalReducer,
    initialState,
    'codebreaker',
  );

  return (
    <GlobalReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalReducerContext.Provider>
  );
};

export { GlobalReducerContextProvider, GlobalReducerContext };
