import { Fragment } from "react";

import "./Title.css";

export function Title({ text = "Empty text", isRed = false }) {
  const Text = () => <span>{text}</span>;
  return (
    <Fragment>
      <h1 style={{ color: isRed ? "red" : "black" }} className="title">
        <Text />
      </h1>

      <p>Text</p>
      <div>
        <button>Click</button>
      </div>
    </Fragment>
  );
}
