import { useState, useEffect, useRef } from "react";

function App() {
  const [data, setData] = useState(0);

  // const ref = useRef();   // {current: undefined}

  const ref = useRef(0);
  useEffect(()=>{
    ref.current = ref.current+1;
    console.log("useeffect called", ref);
  })
 
const ele = useRef();
console.log(ref);
  // useEffect(()=>{
  // setData(data); // useEeffect will call only one time

  // setData(data +1); useEffect will call infinite times

  //   if(data<205){
  //     setData(data+1);       useEffect will call Finite times
  //   }
  //  })

  return (
    <>
      {/* <h1>Timer is : {data}</h1> */}
      <input type="text" ref={ele}/>
    </>
  );
}

export default App;
