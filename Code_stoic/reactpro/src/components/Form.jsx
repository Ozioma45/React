import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
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
      </form>
    </div>
  );
}
