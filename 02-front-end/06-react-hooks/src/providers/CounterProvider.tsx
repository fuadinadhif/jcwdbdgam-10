import React, { useState } from "react";
import { CounterContext } from "../contexts/counter-context";

export function CounterProvider(props: { children: React.ReactNode }) {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {props.children}
    </CounterContext.Provider>
  );
}
