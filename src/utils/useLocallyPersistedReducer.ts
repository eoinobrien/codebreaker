import { Reducer, ReducerState, useEffect, useReducer } from 'react';
import { CURRENT_VERSION_NUMBER } from 'reducers/globalReducer';
import { Migrate } from 'reducers/migration';

export function useLocallyPersistedReducer<R extends Reducer<any, any>>(
  reducer: R,
  defaultState: ReducerState<R>,
  storageKey: string,
  initializer: any = undefined,
) {
  const hookVars = useReducer(reducer, defaultState, (defaultState) => {
    try {
      const persisted = JSON.parse(localStorage.getItem(storageKey) ?? '');
      if (persisted !== null) {
        return Migrate(persisted, CURRENT_VERSION_NUMBER);
      }

      return initializer !== undefined
        ? initializer(defaultState)
        : defaultState;
    } catch {
      return initializer !== undefined
        ? initializer(defaultState)
        : defaultState;
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(hookVars[0]));
  }, [storageKey, hookVars]);

  return hookVars;
}
