import { ComponentType, createContext, createElement, FC, memo, PropsWithChildren, useContext } from 'react';

import { DataServiceProvider } from './services/data';

export const buildComponentTree = (providers: [ComponentType<PropsWithChildren>, ...ComponentType<PropsWithChildren>[]]): FC<PropsWithChildren> => {
  if (providers.length === 1) {
    const [Component] = providers;

    return ({ children }) => <Component>{children}</Component>;
  }

  const [Component1, Component2, ...rest] = providers;

  const Merged: FC<PropsWithChildren> = ({ children }) => (
    <Component1>
      <Component2>{children}</Component2>
    </Component1>
  );

  return buildComponentTree([Merged, ...rest]);
};

export function createService<T, P extends Record<string, unknown>>(useProvider: (p: P) => T, defaultValue: T) {
  const Context = createContext<T>(defaultValue);

  const ref = { value: defaultValue };

  const ServiceProvider: FC<PropsWithChildren<P>> = (p) => {
    const value = useProvider(p);
    ref.value = value;

    return createElement(Context.Provider, { value }, p.children);
  };

  const useService = () => useContext(Context);
  const getService = () => ref.value;

  return [ServiceProvider, useService, getService] as const;
}

const Services = buildComponentTree([DataServiceProvider]);

export const ServiceProvider = memo<PropsWithChildren>(({ children }) => <Services>{children}</Services>);
