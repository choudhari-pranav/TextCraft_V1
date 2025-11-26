import React from "react";

export default function FunctionBasic() {
  function getName1() {
    return "Test";
  }
  function getName2(name) {
    return name;
  }
  const name = "Pranav";

  return (
    <>
      <div>FunctionExample</div>
      <h1>{getName1()}</h1>
      <h1>{getName2(name)}</h1>
    </>
  );
}
