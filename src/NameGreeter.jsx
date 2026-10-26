import { useState } from "react";
function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
        <p>Hello, {name ? name : "stranger"}!</p>
    </div>
  );
}
export default NameInput;
