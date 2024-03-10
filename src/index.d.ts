declare const identifier: unique symbol;

declare class Signal<T = any> {
  constructor(value?: T);
  subscribe(fn: (value: T) => void): () => void;
  valueOf(): T;
  toString(): string;
  toJSON(): T;
  peek(): T;
  brand: typeof identifier;
  get value(): T;
  set value(value: T);
}

interface ExtendedInputHTMLAttributes<T> extends React.InputHTMLAttributes<T> {
  value?: string | readonly string[] | number | Signal<string> | Signal<readonly string[]> | Signal<number> | undefined;
}

declare module JSX {
  interface IntrinsicElements {
    input: React.DetailedHTMLProps<ExtendedInputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  }
}
