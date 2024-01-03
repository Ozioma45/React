import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  let message;

  const display = false;

  if (display) {
    message = <h1>This is Message 1</h1>;
  } else {
    message = <h1>This is Message 2</h1>;
  }

  return message;
}
