import { ComponentType, createElement, FC, memo, useMemo, useRef } from 'react';

export const ScreenComponent = <T extends Record<string, unknown>>({
  Component,
  props: providedProps = {},
}: {
  Component: ComponentType<T>;
  props?: Partial<T>;
}) => {
  const props = useRef<Partial<T>>({ ...providedProps });
  const finalProps = useMemo<T>(() => props.current as T, []);

  return createElement<T>(Component, finalProps);
};

export const screen = <T extends Record<string, unknown>>(Component: ComponentType<T>): FC<Partial<T>> =>
  memo((props) => <ScreenComponent<T> Component={Component} props={props} />);
