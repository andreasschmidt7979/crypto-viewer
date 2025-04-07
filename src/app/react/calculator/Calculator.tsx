import React from "react";
import { initialState, reducer } from "./helpers/reducer";
import Display from "./Display";
import Buttons from "./Buttons";
import Background from "./Background";

export default function Calculator() {
  const [{ currentOperand, previousOperand, operation }, dispatch] =
    React.useReducer(reducer, initialState);

  return (
    <main className="container mx-auto ">
      <section className="sm:mx-2 border-solid border-[#040913] border my-10 rounded-md backdrop-blur-sm">
        <Background />
        <Display
          currentOperand={currentOperand}
          previousOperand={previousOperand}
          operation={operation}
        />
        <Buttons dispatch={dispatch} />
      </section>
    </main>
  );
}
