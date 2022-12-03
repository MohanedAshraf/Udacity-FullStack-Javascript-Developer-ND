import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("playground");

  function changeTitle(e) {
    // setTitle(e.target.value);
  }

  return (
    <div>
      <h1>REACT One Way binding</h1>
      <input type="text" value={title} onChange={changeTitle}></input>
      <br></br>
      Input Value {title}
    </div>
  );
}

export default App;
