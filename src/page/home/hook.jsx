import React, { useState, useEffect } from "react";

function Example(props) {
  const [number, setNumber] = useState({ name: props.name, age: 12 });
  useEffect(() => {
    function add(number) {
        return { name: "dabaojian", age: 4 }
      // setNumber({ name: "dabaojian", age: number.age + 4 });
    }
    //return setNumber(add(number))
  });
  console.log(number)
  return (
    <div>
      <p>{number.name}</p>
      <p>{number.age}</p>
      <Button
        onClick={() => setNumber({ name: "dabaojian", age: number.age + 1 })}
      >
        onClick
      </Button>
    </div>
  );
}
export default Example;
