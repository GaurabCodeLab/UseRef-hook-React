import { useRef, useEffect, useState} from 'react';

function App(){
  const ele = useRef();
  const [name, setName] = useState('Gaurab');
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
    <h1>{name} is changing input field</h1>
    <input type="text" ref={ele} onChange={(event)=>setName(event.target.value)}/> <br/> <br/>
    {
      console.log(ele) //{current: undefined} in initial render

    }
    <button onClick={handleClick}>Click Me !!!</button>
    </>
  )
}

export default App;
