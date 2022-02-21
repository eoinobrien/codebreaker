import { Reducer, ReducerState, useEffect, useReducer } from 'react';

export function useLocallyPersistedReducer<R extends Reducer<any, any>>(
  reducer: R,
  defaultState: ReducerState<R>,
  storageKey: string,
  initializer: any = undefined,
) {
  const hookVars = useReducer(reducer, defaultState, (defaultState) => {
    try {
      const persisted = JSON.parse(localStorage.getItem(storageKey) ?? '');
      return persisted !== null
        ? persisted
        : initializer !== undefined
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
