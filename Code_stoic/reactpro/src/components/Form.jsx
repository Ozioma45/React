import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function handleSummit(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      {name.firstName}-{name.lastName}
      <form>
        <input
          type="text"
          /* onChange={function demo(e) {
            return handleChange(e);
          }} */

          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          value={name.firstName}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />

        <button onClick={(e) => handleSummit(e)}>Add</button>
      </form>
    </div>
  );
}
