import { useRef, useEffect} from 'react';

function App(){
  const ele = useRef();
  // useEffect(()=>{
  //   console.log(ele);    // {current: input}
  // })
  // console.log(ele); //{current: undefined}
  
  function handleClick(){
    ele.current.style.color = "red";
    ele.current.focus();
    ele.current.style.backgroundColor = "green";
    console.log(ele.current);
  }
  
  return(
    <>
    <h1>Hello Parent Component</h1>
    <input type="text" ref={ele}/> <br/> <br/>
    {
      console.log(ele) //{current: undefined} in initial render

    }
    <button onClick={handleClick}>Click Me !!!</button>
    </>
  )
}

export default App;
